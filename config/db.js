const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true
    });

    console.log("MonogoDB connected...");
  } catch (err) {
    console.error(err);

    //Exit process with failure
    process.exit(1);
  }
};

mongoose.set("useFindAndModify", false);

module.exports = connectDB;
