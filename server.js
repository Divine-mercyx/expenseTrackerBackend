const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userController = require("./controllers/userController");
const productController = require("./controllers/productController");

dotenv.config();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors({
  origin: "https://expensetrackerfrontend-dkgq.onrender.com",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  maxAge: 600,
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  maxAge: 600,
}));
app.use(express.json());

app.use("/api/users", userController);
app.use("/api/products", productController);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
