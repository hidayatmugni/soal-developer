const express = require("express");
const router = express.Router();
const Marketing = require("../models/marketing");
const Penjualan = require("../models/penjualan");

router.get("/", async (req, res) => {
  try {
    const marketingList = await Marketing.find();
    res.json(marketingList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
