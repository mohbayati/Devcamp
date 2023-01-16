const Bootcamp = require("../models/Bootcamp");

//@desc         Get all bootcamps
//@route        Get /api/v1/bootcamps
//@access       Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ sucess: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ sucess: false, err: error });
  }
};

//@desc         Get single bootcamp
//@route        Get /api/v1/bootcamps/:id
//@access       Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      res.status(404).json({ sucess: false, err: "not found" });
    }
    res.status(200).json({ sucess: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ sucess: false, err: error });
  }
};

//@desc         Create new bootcamp
//@route        POST /api/v1/bootcamps
//@access       Private
exports.createBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ sucess: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ sucess: false, err: error });
  }
};

//@desc         Update bootcamp
//@route        PUT /api/v1/bootcamps
//@access       Private
exports.updateBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      res.status(404).json({ sucess: false, err: "not found" });
    }
    res.status(200).json({ sucess: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ sucess: false, err: error });
  }
};

//@desc         Delete bootcamp
//@route        DELETE /api/v1/bootcamps
//@access       Private
exports.deleteBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      res.status(404).json({ sucess: false, err: "not found" });
    }
    res.status(200).json({ sucess: true, data: {} });
  } catch (error) {
    res.status(400).json({ sucess: false, err: error });
  }
};
