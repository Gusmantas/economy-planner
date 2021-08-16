const { pool } = require("../connection");

const getUserMonths = (req, res) => {
  let userId = req.params.userId;

  pool.query(
    `SELECT * FROM months WHERE user_id = $1;`,
    [userId],
    (err, months) => {
      if (err) {
        res.json("months not found");
        return;
      }
      res.json(months.rows);
    }
  );
};

const createMonth = (req, res) => {
  let newMonth = req.body;
  pool.query(
    `INSERT INTO months(name, year, user_id) VALUES($1,$2,$3) RETURNING id`,
    [newMonth.name, newMonth.year, newMonth.userId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.json({ error: "could not create new month" });
        return;
      }
      res.json({ success: "month created", id: result.rows[0].id });
    }
  );
};

module.exports = { getUserMonths, createMonth };
