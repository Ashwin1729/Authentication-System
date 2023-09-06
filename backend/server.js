const express = require("express");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectMongoDB = require("./config/mongoDBConfig");

const server = express();
dotenv.config();

server.use(express.json());

// server.get("/", (req, res) => {
//   res.send("API is running successfuly");
// });

server.use("/api/users", userRoutes);
server.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectMongoDB((client) => {
  console.log("MongoDB connected sucessfully!");
  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
