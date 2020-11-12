const express = require("express");
const router = express.Router();

const {
  getAllUserData,
  getSpecificUser,
  postNewUser,
  getBootcampers,
  getMentors,
  deleteUser,
  patchNewMatch,
} = require("../model/index");

router.get("/", async function (req, res, next) {
  if (req.query.search) {
    const specificUser = await getSpecificUser(req.query.search);
    res.json({ payload: specificUser });
    return;
  }

  const allUsers = await getAllUserData();
  res.json({ payload: allUsers });
});

router.post("/", async function (req, res) {
  console.log(req.body);
  const newUser = await postNewUser(req.body);
  res.json({ payload: newUser });
});

router.get("/bootcampers", async function (req, res) {
  const bootcampers = await getBootcampers();
  res.json({ payload: bootcampers });
  return;
});

router.get("/mentors", async function (req, res) {
  const mentors = await getMentors();
  res.json({ payload: mentors });
  return;
});

router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const result = await deleteUser(id);
  res.json({
    success: true,
    message: result,
  });
});

router.patch("/match", async function (req, res) {
  const match = await patchNewMatch(req.body);
  res.json({ payload: match });
});

module.exports = router;
