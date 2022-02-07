const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenseSchema = new Schema(
  {
    title: {
      type: String,
      required: "Transection title is required.",
    },
    transactionAmount: {
      type: Number,
      required: "Transection amount is required.",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports =  Expense;
