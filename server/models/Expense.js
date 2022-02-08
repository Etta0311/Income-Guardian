const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const expenseSchema = new Schema(
  {
    title: {
      type: String,
      required: "Transection title is required.",
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    transactionAmount: {
      type: String,
      required: "Transection amount is required.",
      trim: true,
    },
    user: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    }
  },
  // { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Expense = model("Expense", expenseSchema);

module.exports = Expense;
