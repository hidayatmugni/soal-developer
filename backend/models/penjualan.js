const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema({
  transaction_number: {
    type: String,
    required: true,
  },
  marketing_Id: { type: mongoose.Schema.Types.ObjectId, ref: "Marketing" },
  date: {
    type: Date,
    required: true,
  },
  cargo_fee: {
    type: Number,
    required: true,
  },
  total_balance: {
    type: Number,
    required: true,
  },
  grand_total: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Penjualan", SalesSchema);
