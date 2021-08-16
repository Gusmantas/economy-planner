const { pool } = require("../connection");

const getMonthHistory = (req, res) => {
  let data = req.params;
  console.log(data);
  pool.query(
    `SELECT history.id, type, name, date, sum, month_id, category 
      FROM history 
      LEFT JOIN categories 
      ON history.category_id = categories.id 
      WHERE user_id = $1 AND month_id = $2
      ORDER BY date;`,
    [data.userId, data.monthId],
    (err, results) => {
      if (err) {
        res.json("months not found");
        console.log(err);
        return;
      }
      res.json(results.rows);
    }
  );
};

const createHistoryRow = (req, res) => {
  let { type, name, date, sum, category_id, month_id, user_id } = req.body;

  pool.query(
    `INSERT INTO history(
    type, 
    name, 
    date, 
    sum, 
    category_id, 
    month_id, 
    user_id) 
    VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING id;`,
    [type, name, date, sum, category_id, month_id, user_id],
    (err, result) => {
      if (err) {
        res.json({ error: "could not create history row" });
        return;
      }
      res.json({ success: "history row created", id: result.rows[0].id });
    }
  );
};

module.exports = { getMonthHistory, createHistoryRow };
