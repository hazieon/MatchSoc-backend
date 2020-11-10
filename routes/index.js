const express = require("express");
const router = express.Router();

const { getAllUserData } = require("../model/index");

router.get("/", async function (req, res, next) {
  const allUsers = await getAllUserData();
  res.json({ payload: allUsers });
});

module.exports = router;
