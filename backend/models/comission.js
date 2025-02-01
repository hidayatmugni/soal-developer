const mongoose = require("mongoose");

const CommissionSchema = new mongoose.Schema({
  marketing_Id: { type: mongoose.Schema.Types.ObjectId, ref: "Marketing" },
  month: { type: String, required: true },
  omzet: { type: Number, required: true },
  commission_percentage: { type: Number, required: true },
  commission_amount: { type: Number, required: true },
});

module.exports = mongoose.model("Commission", CommissionSchema);
