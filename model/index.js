const { query } = require("../db/scripts/poolConnect");

module.exports = {
  getAllUserData: async () => {
    const sql = "SELECT * FROM users";
    const res = await query(sql);
    return res.rows;
  },
  getSpecificUser: async (user) => {
    const sql =
      "SELECT * FROM users WHERE CONCAT (firstname, ' ', surname) LIKE $1";
    const res = await query(sql, [`%%${user.toLowerCase()}%%`]);
    return res.rows;
  },
};
