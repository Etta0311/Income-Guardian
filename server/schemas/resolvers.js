const { AuthenticationError } = require("apollo-server-errors");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      const Alluser = await User.find({}).populate("expenses");
      console.log(Alluser);
      return Alluser;
    },

    userById: async (parent, args, context) => {
      if (context.user) {
        return User.findById({ _id: context.user._id })
          .select("-__v -password")
          .populate("expenses");
      }
      throw new AuthenticationError("Login to continue.");
    },
  },

  Mutation: {
    signUp: async (parent, { username, email, password }) => {
      let finduser = await User.findOne({ email });
      //If user not found then show error
      if (finduser) {
        throw new Error(
          "User Already Exists! Please use antoher email to register."
        );
      }

      let findusername = await User.findOne({ username });

      //If username has been taken then show error
      if (findusername) {
        throw new Error(
          "Username Already Taken! Please use antoher username to register."
        );
      }

      let user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found.");
      }

      const confirmPW = await user.isCorrectPassword(password);

      if (!confirmPW) {
        throw new AuthenticationError("Incorrect password.");
      }

      // When logged in
      const token = signToken(user);
      return { token, user };
    },

    addExpense: async (parent, { title, transactionAmount }, context) => {
      if (context.user) {
        const newrecord = await Expense.create({
          title,
          transactionAmount,
          user: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { expenses: newrecord._id } },
          { new: true }
        );
        return newrecord;
      }
      throw new AuthenticationError("LOGIN to continue.");
    },

    updateExpense: async (parent, args, context) => {
      if (context.user) {
        let finduser = await User.findOne({
          _id: context.user._id,
        });

        let Expense = finduser.expenses.find((Expense) => {
          return Expense._id === args._id;
        });

        Expense.title = args.title;
        Expense.transactionAmount = args.transactionAmount;
        
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              expenses: finduser.Expense,
            },
          },
          {
            new: true,
          }
        );
      }
      throw new AuthenticationError("Not logged in");
    },

    deleteExpense: async (parent, { _id }, context) => {
      if (context.user) {
        return await Expense.findOneAndDelete({ _id: _id });
      }
      throw new AuthenticationError("LOGIN to continue.");
    },
  },
};

module.exports = resolvers;
