const { getAllProducts, createProduct, getTotalPriceOfUserProducts, getTotalPriceOfUserForCategory, getNumberOfUserProducts, getUserProducts } = require("../data/repository/productRepository");
const express = require("express");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/user-products/:id", getUserProducts);
router.post("/", createProduct);
router.get("/total-price/:id", getTotalPriceOfUserProducts);
router.get("/total-price/:id/:category", getTotalPriceOfUserForCategory);
router.get("/number-of-products/:id", getNumberOfUserProducts);

module.exports = router;