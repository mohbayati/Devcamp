//@desc         Get all bootcamps
//@route        Get /api/v1/bootcamps
//@access       Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: `Show all bootcamps` });
};

//@desc         Get single bootcamp
//@route        Get /api/v1/bootcamps/:id
//@access       Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: `Show bootcamp ${req.params.id}` });
};

//@desc         Create new bootcamp
//@route        POST /api/v1/bootcamps
//@access       Private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: `Create new bootcamp` });
};

//@desc         Update bootcamp
//@route        PUT /api/v1/bootcamps
//@access       Private
exports.updateBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Update bootcamp ${req.params.id}` });
};

//@desc         Delete bootcamp
//@route        DELETE /api/v1/bootcamps
//@access       Private
exports.deleteBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp ${req.params.id}` });
};
