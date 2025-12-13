const express = require("express");
const cors = require("cors");

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(cors());
app.use(express.json());

/* ---------- HOME CHECK ---------- */
app.get("/", (req, res) => {
  res.send("Profit Grocery Backend is running");
});

/* ---------- COUPON REDEEM API ---------- */
app.post("/api/redeem", (req, res) => {
  const { name, phone, code } = req.body;

  if (!name || !phone || !code) {
    return res.status(400).json({
      success: false,
      message: "Name, phone and coupon code are required"
    });
  }

  // VALID COUPON
  if (code === "PGNEW") {
    return res.json({
      success: true,
      gift: "🎁 Free Sugar 2kg",
      message: "Congratulations! You won a gift",
      redirectUrl:
        "https://play.google.com/store/apps/details?id=com.profitgrocery.app"
    });
  }

  // INVALID COUPON
  return res.status(400).json({
    success: false,
    message: "Invalid coupon code"
  });
});

/* ---------- ADMIN CHECK ---------- */
app.get("/admin", (req, res) => {
  res.send("Admin Panel – Backend running successfully.");
});

/* ---------- SERVER START ---------- */
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
