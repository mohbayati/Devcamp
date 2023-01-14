const express = require("express");
const {
  getBootcamps,
  createBootcamps,
  deleteBootcamps,
  getBootcamp,
  updateBootcamps,
} = require("../controllers/bootcamps");

const router = express.Router();

router.route("/").get(getBootcamps).post(createBootcamps);
router
  .route("/:id")
  .put(updateBootcamps)
  .get(getBootcamp)
  .delete(deleteBootcamps);

module.exports = router;
