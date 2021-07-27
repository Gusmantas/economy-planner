const { Pool } = require("pg");
const Encrypt = require("../Encrypt")

const pool = new Pool({
  connectionString: "postgres://tufzhevujdtvwe:d109a5390497c7282494981635284e64394c757b56508fdd87fa2290be2929cd@ec2-54-228-99-58.eu-west-1.compute.amazonaws.com:5432/deg5be2p566aa",
  ssl: {
    rejectUnauthorized: false
  }
});

const getUsers = (req, res) => {
  pool.query(`SELECT * FROM users;`, [], (err, users) => {
    if (err) {
      res.json("Users not found");
      return;
    }
    res.json(users.rows)
  });
}


const login = (req, res) => {
  pool.query(`SELECT * FROM users WHERE email = $1`, [req.body.email], (err, user) => {
    user = user.rows[0]

    if (!user) {
      res.status(401).json({ error: "Bad credentials" })
      return
    }

    req.body.password = Encrypt.encrypt(req.body.password);
    if (user.password === req.body.password) {
      delete user.password;
      req.session.user = user
      res.json({ success: "Logged in successfully", loggedInUser: user });
      return
    } else {
      res.status(401).json({ error: "Bad credentials" });
      return
    }
  });
}


const registerUser = (req, res) => {
  let userToRegister = req.body;

  userToRegister.password = Encrypt.encrypt(userToRegister.password)
  pool.query(`INSERT INTO users(email, password)VALUES($1,$2)`, [userToRegister.email, userToRegister.password], (err, result) => {
    if (err) {
      res.status(400).json({ error: "Email already registered" });
      return
    }
    res.json({ success: "User registered successfully", lastID: this.lastID });
  });
}


const whoAmI = (req, res) => {
  res.json(req.session.user || null);
}

const logout = (req, res) => {
  delete req.session.user;
  res.json({ success: "Logged out successfully" });
};


module.exports = { getUsers, registerUser, whoAmI, logout, login }