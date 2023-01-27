const express = require("express");
const {
  getUser,
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/users");

const User = require("../models/User");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router.use(protect);
router.use(authorize("admin"));

router.route("/").get(advancedResults(User), getUsers).post(createUsers);
router.route("/:id").get(getUser).put(updateUsers).delete(deleteUsers);

module.exports = router;
