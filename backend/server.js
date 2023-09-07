const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectMongoDB = require("./config/mongoDBConfig");

const server = express();
dotenv.config();

server.use(express.json());

server.use("/api/users", userRoutes);

// ------------------------- Deployment ----------------------------

const _dirname = path.resolve();
console.log(path.join(_dirname, "/frontend/build"));

if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(_dirname, "/frontend/build")));

  server.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
  });
} else {
  server.get("/", (req, res) => {
    res.send("API is running successfuly");
  });
}

// ------------------------- Deployment ----------------------------

server.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectMongoDB((client) => {
  console.log("MongoDB connected sucessfully!");
  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
