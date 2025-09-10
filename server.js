const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚗 Driving School Hub backend is running!");
});

// Example endpoint for driving schools
app.get("/schools", (req, res) => {
  const schools = [
    { id: 1, name: "ABC Driving School", location: "Durban", price: 250 },
    { id: 2, name: "XYZ Driving Academy", location: "Johannesburg", price: 300 }
  ];
  res.json(schools);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
