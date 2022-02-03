const { AuthenticationError } = require("apollo-server-errors");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      const userData = await User.find({}).populate("expences");
      console.log(userData);

      return userData;
    },

    userById: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("expences");
      }
      throw new AuthenticationError("Login to continue.");
    },
  },
  Mutation: {
    signUp: async (parent, args) => {
      let finduser = await User.findOne({ email });
      //If user not found then show error
      if (finduser) {
        throw new Error("User Already Exists! Please use antoher email to register.");
      }

      let findusername = await User.findOne({ username });

      //If username has been taken then show error
      if (findusername) {
        throw new Error("Username Already Taken! Please use antoher username to register.");
      }

      let user = await User.create(args.data);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { username, password }) => {
        const user = await User.findOne({ username });
        const confirmPW = await user.isCorrectPassword(password);
  
        // If email or password is incorrect, throw error
        if (!user || !confirmPW) {
          throw new AuthenticationError("Incorrect username or passwords.");
        }
  
        // When logged in
        const token = signToken(user);
        return { token, user };
      },


  },
};

module.exports = resolvers;
