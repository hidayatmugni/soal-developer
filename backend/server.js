const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const marketingRoutes = require("./routes/marketingRoutes");
const penjualanRoutes = require("./routes/penjualanRoutes");
const comissionRoutes = require("./routes/comissionRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/marketing", marketingRoutes);
app.use("/api/penjualan", penjualanRoutes);
app.use("/api/comission", comissionRoutes);
app.use("/api/payments", paymentRoutes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
