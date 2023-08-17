// index.js
const express = require("express");
const connectDatabase = require("./utils/database");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Connecting to database
connectDatabase();

// Setup bodyparser
app.use(express.json());

// Importing all routes
const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => {
  console.log(`server starting on port ${PORT} in ${process.env.NODE_ENV}`);
});
