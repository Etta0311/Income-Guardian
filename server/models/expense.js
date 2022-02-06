const { Schema } = require("mongoose");

const expenceSchema = new Schema(
  {
    title: {
      type: String,
      required: "Transection title is required.",
    },
    transactionAmount: {
      type: Number,
      required: "Transection amount is required.",
    },
    date: {
      type: String,
      required: "Transection date is required.",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = expenceSchema;