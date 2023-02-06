const express = require("express");
const {
  register,
  login,
  getMe,
  forgotpassword,
  resetPassword,
  updateDetails,
  updatePassword,
  logout,
} = require("../controllers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.get("/logout", logout);
router.put("/updatedetails", protect, updateDetails);
router.post("/forgetpassword", forgotpassword);
router.put("/resetPassword/:resettoken", resetPassword);
router.put("/updatepassword", protect, updatePassword);

module.exports = router;
