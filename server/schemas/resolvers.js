const { AuthenticationError } = require("apollo-server-errors");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("expenses");
      }
      throw new AuthenticationError("LOGIN required.");
    },
    // users: async () => {
    //   const userData = await User.find({}).populate("expences");
    //   console.log(userData);

    //   return userData;
    // },

    // userById: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id })
    //       .select("-__v -password")
    //       .populate("expences");
    //   }
    //   throw new AuthenticationError("Login to continue.");
    // },
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

    updateUser: async (parent, { username, email, password }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, { username, email, password }, {
          new: true,
        });
      }
      throw new AuthenticationError("LOGIN to continue.");
    },

    addExpense: async (parent, args, context) => {
      if (context.user) {
        const newrecord = await Expense.create(args);
        const updateUser = await User.findOneAndUpdate(
          { _id: args.user },
          { $push: { expenses: newrecord._id } }
        );
        return { newrecord, updateUser };
      }
      throw new AuthenticationError("LOGIN to continue.");
    },

    updateExpense: async (
      parent,
      { _id, title, transactionAmount, date },
      context
    ) => {
      if (context.user) {
        return await Expense.findByIdAndUpdate(
          { _id: _id },
          { title, transactionAmount },
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
