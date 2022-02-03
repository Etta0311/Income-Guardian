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
            .populate("expences")
        }
        throw new AuthenticationError("Login to continue.");
      },
    },
    Mutation: {
        signUp: async (parent, { userInput }) => {
            let { username, email, password, confirmPassword } = userInput;

    },
};
module.exports = resolvers;