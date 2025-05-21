const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTotalPriceOfUserProducts = async (req, res) => {
    try {
        const products = await Product.find({ user: req.params.id });
        const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
        res.status(200).json(totalPrice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTotalPriceOfUserForCategory = async (req, res) => {
    try {
        const products = await Product.find({ user: req.params.id, category: req.params.category });
        const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
        res.status(200).json(totalPrice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getAllProducts, getProductById, createProduct, getTotalPriceOfUserProducts, getTotalPriceOfUserForCategory };