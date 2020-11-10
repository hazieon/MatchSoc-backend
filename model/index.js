const { query } = require("../db/scripts/poolConnect");

module.exports = {
  getAllUserData: async () => {
    const sql = 'SELECT * FROM users';
    const res = await query(sql);
    return res.rows;
  },
};
