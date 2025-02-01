const express = require("express");
const Payment = require("../models/payment");
const Penjualan = require("../models/penjualan");

const router = express.Router();

// API untuk menambahkan pembayaran kredit
router.post("/", async (req, res) => {
  try {
    const { sales_id, amount_paid } = req.body;

    // Ambil data penjualan
    const penjualan = await Penjualan.findById(sales_id).populate("marketing_Id");
    if (!penjualan) return res.status(404).json({ message: "Transaksi tidak ditemukan" });

    // Hitung sisa saldo setelah pembayaran
    const remaining_balance = penjualan.grand_total - amount_paid;

    // Simpan pembayaran
    const payment = new Payment({
      sales_id,
      amount_paid,
      remaining_balance,
      status: remaining_balance <= 0 ? "Lunas" : "Belum Lunas",
    });

    await payment.save();
    res.status(201).json({ message: "Pembayaran berhasil!", data: payment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// API untuk mendapatkan semua pembayaran
router.get("/", async (req, res) => {
  try {
    const payments = await Payment.find().populate("sales_id");
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
