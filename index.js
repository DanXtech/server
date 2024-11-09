const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const quizRoutes = require("./routes/quizRoutes");

dotenv.config();

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", quizRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI) // No need for options here
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
