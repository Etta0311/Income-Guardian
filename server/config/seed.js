const db = require("./connection");
const { User, Expense } = require("../models");

db.once("open", async () => {
  try {
    await Expense.deleteMany({});
    await User.deleteMany({});

    const posts = await Expense.insertMany([
      {
        title: "Toy Kitchen",
        description:
          "Well-loved toy kitchen. Comes with toy kitchen accessories and food.",
        image: "",
        category: "Pretend Play",
        comments: [],
      },
      {
        title: "Marvel action heroes",
        description:
          "Avengers actions heroes. Great condition. Small scratch on Spiderman.",
        image: "",
        category: "Action Figures",
        comments: [],
      },
      {
        title: "Various baby books",
        description: "All in great condition and barely used",
        image: "",
        category: "Books",
        comments: [],
      },
      {
        title: "Wooden puzzles for toddlers",
        description:
          "My 2yo loved these but she's grown out of them now. Good used condition and many more years to go.",
        image: "",
        category: "Puzzles",
        comments: [],
      },
      {
        title: "100+ set of magnetic tiles",
        description:
          "Keep the kids busy with these magnetic tiles. A few scuffs but in good working condition",
        image: "",
        category: "Construction",
        comments: [],
      },
      {
        title: "Set of Frozen dolls",
        description:
          "She got two sets for christmas so these have barely been played with.",
        image: "",
        category: "Dolls",
        comments: [],
      },
    ]);

    console.log("posts seeded");

    const users = await User.insertMany([
      {
        firstName: "Lily",
        lastName: "So",
        email: "lily@testmail.com",
        password: "password12345",
        posts: [],
      },
      {
        firstName: "Sarah",
        lastName: "Head",
        email: "sarah@testmail.com",
        password: "password12345",
        posts: [],
      },
      {
        firstName: "Breana",
        lastName: "Bee",
        email: "bre@testmail.com",
        password: "password12345",
        posts: [],
      },
      {
        firstName: "Nick",
        lastName: "La",
        email: "nick@testmail.com",
        password: "password12345",
        posts: [],
      },
    ]);

    console.log("users seeded");

    process.exit();
  } catch (err) {
    console.log(err);
  }
});