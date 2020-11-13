const { query } = require("../scripts/poolConnect");
const testdataa = require("./data/testdataa");

const sql =
  "INSERT INTO users (firstname, surname, address, email, phone, image, isbootcamper, industry, interests, matchedwith) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";

function populateTable() {
  testdataa.map(async (value) => {
    const res = await query(sql, [
      value.firstname,
      value.surname,
      value.address,
      value.email,
      value.phone,
      value.image,
      value.isbootcamper,
      value.industry,
      value.interests,
      value.matchedwith,
    ]);
    console.log(res);
  });
}

populateTable();
