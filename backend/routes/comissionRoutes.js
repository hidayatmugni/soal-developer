const express = require("express");
const Commission = require("../models/comission");
const Penjualan = require("../models/penjualan");
const router = express.Router();

// API untuk menampilkan komisi per marketing berdasarkan bulan
router.get("/komisi", async (req, res) => {
  try {
    // Ambil semua transaksi penjualan dan hitung total omzet per bulan per marketing
    const commissionData = await Penjualan.aggregate([
      // Gabungkan data marketing dengan transaksi penjualan
      {
        $lookup: {
          from: "marketings",
          localField: "marketing_Id",
          foreignField: "_id",
          as: "marketing",
        },
      },
      // Konversi field 'date' ke Date jika formatnya string
      {
        $project: {
          marketing_Id: 1,
          date: { $toDate: "$date" }, // Pastikan 'date' adalah Date
          grand_total: 1,
          month: { $month: { $toDate: "$date" } }, // Gunakan $toDate untuk konversi
          year: { $year: { $toDate: "$date" } }, // Gunakan $toDate untuk konversi
        },
      },
      // Kelompokkan berdasarkan marketing dan bulan
      {
        $group: {
          _id: { marketing_Id: "$marketing_Id", month: "$month", year: "$year" },
          total_omzet: { $sum: "$grand_total" },
        },
      },
      // Tambahkan informasi marketing
      {
        $lookup: {
          from: "marketings", // Nama koleksi marketing
          localField: "_id.marketing_Id",
          foreignField: "_id",
          as: "marketingInfo",
        },
      },
      {
        $unwind: "$marketingInfo", // Unwind marketingInfo untuk mendapatkan nama marketing
      },
      // Hitung komisi berdasarkan omzet
      {
        $project: {
          marketing: "$marketingInfo.name",
          month: "$_id.month",
          year: "$_id.year",
          total_omzet: 1,
          commission_percentage: {
            $cond: {
              if: { $gte: ["$total_omzet", 500000000] },
              then: 10,
              else: {
                $cond: {
                  if: { $gte: ["$total_omzet", 200000000] },
                  then: 5,
                  else: {
                    $cond: {
                      if: { $gte: ["$total_omzet", 100000000] },
                      then: 2.5,
                      else: 0,
                    },
                  },
                },
              },
            },
          },
        },
      },
      // Hitung komisi nominal
      {
        $project: {
          marketing: 1,
          month: 1,
          year: 1,
          total_omzet: 1,
          commission_percentage: 1,
          commission_amount: {
            $multiply: [{ $divide: ["$commission_percentage", 100] }, "$total_omzet"],
          },
        },
      },
    ]);

    res.json(commissionData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
