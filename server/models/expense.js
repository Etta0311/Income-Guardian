
const { Schema } = require("mongoose");

const expenceSchema = new Schema(
  {
    title: {
      type: String,
    },
    status: {
      type: String,
    },
    transactionAmount: {
      type: Number,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = expenceSchema;