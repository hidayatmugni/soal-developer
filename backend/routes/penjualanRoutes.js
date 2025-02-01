const express = require("express");
const router = express.Router();
const Penjualan = require("../models/penjualan");

// ✅ Endpoint GET: Menampilkan Semua Transaksi Penjualan
router.get("/", async (req, res) => {
  try {
    const transaksi = await Penjualan.find().populate("marketing_Id");
    res.json(transaksi);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// API untuk menambahkan data penjualan
router.post("/", async (req, res) => {
  try {
    const { transaction_number, marketing_Id, date, cargo_fee, total_balance, grand_total } = req.body;

    // Validasi input
    if (!transaction_number || !marketing_Id || !date || !total_balance || !grand_total) {
      return res.status(400).json({ message: "Semua field harus diisi!" });
    }

    // Buat data baru
    const newSale = new Penjualan({
      transaction_number,
      marketing_Id,
      date,
      cargo_fee,
      total_balance,
      grand_total,
    });

    // Simpan ke database
    await newSale.save();
    res.status(201).json({ message: "Penjualan berhasil ditambahkan!", data: newSale });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// API untuk mengedit data penjualan
router.put("/:id", async (req, res) => {
  try {
    const { transaction_number, marketing_Id, date, cargo_fee, total_balance, grand_total } = req.body;

    // Cek apakah data penjualan dengan ID tersebut ada
    const sale = await Penjualan.findById(req.params.id);
    if (!sale) {
      return res.status(404).json({ message: "Data penjualan tidak ditemukan!" });
    }

    // Update data penjualan
    sale.transaction_number = transaction_number || sale.transaction_number;
    sale.marketing_Id = marketing_Id || sale.marketing_Id;
    sale.date = date || sale.date;
    sale.cargo_fee = cargo_fee || sale.cargo_fee;
    sale.total_balance = total_balance || sale.total_balance;
    sale.grand_total = grand_total || sale.grand_total;

    // Simpan perubahan ke database
    await sale.save();
    res.json({ message: "Penjualan berhasil diperbarui!", data: sale });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
