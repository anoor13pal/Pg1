const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // 🔥 THIS IS THE FIX
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Profit Grocery Backend is running");
});

app.post("/api/redeem", (req, res) => {
  const { name, phone, code } = req.body;

  if (!name || !phone || !code) {
    return res.status(400).json({
      success: false,
      message: "Missing fields"
    });
  }

  res.json({
    success: true,
    gift: "🎁 Surprise Gift",
    redirectUrl:
      "https://play.google.com/store/apps/details?id=com.profitgrocery.app"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});  // INVALID COUPON
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
