const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/income-guardian", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("~ Connected to MongoDB! ~");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;
