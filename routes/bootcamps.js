const express = require("express");
const {
  getBootcamps,
  createBootcamps,
  getBootcampsInRadius,
  getBootcamp,
  updateBootcamps,
  deleteBootcamp,
  bootcampPhotoUpload,
} = require("../controllers/bootcamps");

const Bootcamp = require("../models/Bootcamp");

const advancedResults = require("../middleware/advancedResults");
// Include other resource routers
const courseRouter = require("./courses");

const router = express.Router();

//Re-route into other resource routers
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router.route("/:id/photo").put(bootcampPhotoUpload);

router
  .route("/")
  .get(advancedResults(Bootcamp, "courses"), getBootcamps)
  .post(createBootcamps);

router
  .route("/:id")
  .put(updateBootcamps)
  .get(getBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
