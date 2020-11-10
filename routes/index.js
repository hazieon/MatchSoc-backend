const express = require("express");
const router = express.Router();

const { getAllUserData } = require("../model/index");

router.get("/", async function (req, res) {
  const allUsers = await getAllUserData();
  res.json({ payload: allUsers });
});

module.exports = router;
