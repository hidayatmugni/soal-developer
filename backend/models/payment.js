const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  sales_id: { type: mongoose.Schema.Types.ObjectId, ref: "Penjualan", required: true },
  amount_paid: { type: Number, required: true },
  payment_date: { type: Date, default: Date.now },
  remaining_balance: { type: Number, required: true },
  status: { type: String, enum: ["Belum Lunas", "Lunas"], default: "Belum Lunas" },
});

module.exports = mongoose.model("Payment", PaymentSchema);
