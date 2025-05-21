const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userController = require("./controllers/userController");
const productController = require("./controllers/productController");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors({
  origin: "https://expensetrackerfrontend-dkgq.onrender.com",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use("/api/users", userController);
app.use("/api/products", productController);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
