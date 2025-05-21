const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userController = require("./controllers/userController");
const productController = require("./controllers/productController");
const port = process.env.PORT || 3000;

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userController);
app.use("/api/products", productController);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
