const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

app.use(cors());

// Connect to the database
connectDB();

// Static Dir
app.use("/uploads", express.static("uploads"));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello World"));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/orders", require("./routes/api/orders"));
app.use("/api/company", require("./routes/api/company"));

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
