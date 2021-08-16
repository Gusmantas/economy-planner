const encryption = require("../encryption");
const { pool } = require("../connection");

const getUsers = (req, res) => {
  pool.query(`SELECT * FROM users;`, [], (err, users) => {
    if (err) {
      res.json("Users not found");
      return;
    }
    res.json(users.rows);
  });
};

const login = (req, res) => {
  pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [req.body.email],
    (err, user) => {
      user = user.rows[0];

      if (!user) {
        res.status(401).json({ error: "email not found" });
        return;
      }

      req.body.password = encryption.encrypt(req.body.password);
      if (user.password === req.body.password) {
        delete user.password;
        req.session.user = user;
        res.json({ loggedInUser: user });
        return;
      } else {
        res.status(401).json({ error: "bad credentials" });
        return;
      }
    }
  );
};

const registerUser = (req, res) => {
  let userToRegister = req.body;

  userToRegister.password = encryption.encrypt(userToRegister.password);
  pool.query(
    `INSERT INTO users(email, password)VALUES($1,$2) RETURNING id`,
    [userToRegister.email, userToRegister.password],
    (err, result) => {
      if (err) {
        res.status(400).json({ error: "account already exists" });
        return;
      }
      res.json({ success: "user registered", id: result.rows[0].id });
    }
  );
};

const whoAmI = (req, res) => {
  res.json(req.session.user || null);
};

const logout = (req, res) => {
  delete req.session.user;
  res.json({ success: "Logged out successfully" });
};

module.exports = { getUsers, registerUser, whoAmI, logout, login };
