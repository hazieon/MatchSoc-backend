const { query } = require("../db/scripts/poolConnect");

module.exports = {
  getAllUserData: async () => {
    const sql = "SELECT * FROM users ORDER BY firstname ASC";
    const res = await query(sql);
    return res.rows;
  },
  getSpecificUser: async (user) => {
    const sql =
      "SELECT * FROM users WHERE CONCAT (firstname, ' ', surname) LIKE $1 ORDER BY firstname ASC";
    const res = await query(sql, [`%%${user.toLowerCase()}%%`]);
    return res.rows;
  },

  postNewUser: async (user) => {
    console.log(user + "from models");
    const sql =
      "INSERT INTO users (firstname, surname, address, email, phone, image, isbootcamper, industry, interests )  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
    const res = await query(sql, [
      user.firstname,
      user.surname,
      user.address,
      user.email,
      user.phone,
      user.image,
      user.isbootcamper,
      user.industry,
      user.interests,
    ]);
    return { status: "success" };
  },
  getBootcampers: async () => {
    const sql = "SELECT * FROM users WHERE isbootcamper = true";
    const res = await query(sql);
    return res.rows;
  },
  getMentors: async () => {
    const sql = "SELECT * FROM users WHERE isbootcamper = false";
    const res = await query(sql);
    return res.rows;
  },
};
