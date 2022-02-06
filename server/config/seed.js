const db = require("./connection");
const { User, Expense } = require("../models");

db.once("open", async () => {
  try {
    await Expense.deleteMany({});
    await User.deleteMany({});

    const record = await Expense.insertMany([
      {
        title: "clothes",
        transactionAmount: "100",
        date: "07022022"
      },
    ]);

    console.log("posts seeded");

    const users = await User.insertMany([
      {
        username: "etta",
        email: "etta@gamil.com",
        password: "123456789",
        expenses: [],
      },
    ]);

    console.log("users seeded");

    process.exit();
  } catch (err) {
    console.log(err);
  }
});