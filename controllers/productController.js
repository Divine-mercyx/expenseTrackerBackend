const { getAllProducts, getProductById, createProduct, getTotalPriceOfUserProducts, getTotalPriceOfUserForCategory } = require("../data/repository/productRepository");
const express = require("express");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.get("/total-price/:id", getTotalPriceOfUserProducts);
router.get("/total-price/:id/:category", getTotalPriceOfUserForCategory);

module.exports = router;