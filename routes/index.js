const express = require("express");
const router = express.Router();

const { getAllUserData, getSpecificUser } = require("../model/index");

router.get("/", async function (req, res, next) {
  if (req.query.search) {
    const specificUser = await getSpecificUser(req.query.search);
    res.json({ payload: specificUser });
    return;
  }

  const allUsers = await getAllUserData();
  res.json({ payload: allUsers });
});

module.exports = router;
