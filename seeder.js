const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require(`colors`);
const fs = require("fs");

dotenv.config({ path: "./config/config.env" });

//Load  models
const Bootcamp = require("./models/Bootcamp");

//Connect to database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI);

//Read from Json files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);

//Import into DB
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log("Data Import".green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//Delete data
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
