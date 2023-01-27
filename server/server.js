const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
