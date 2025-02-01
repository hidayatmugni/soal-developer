const mongoose = require("mongoose");

const MarketingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Marketing", MarketingSchema);
