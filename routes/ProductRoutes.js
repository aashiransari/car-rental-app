const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send({
            message: "All product data feched success",
            data: products
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).send({
            message: "Product details fetched success",
            data: product
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Create a new product
router.post('/', async (req, res) => {
    const { name, imageGallery, subtitle, description } = req.body;
    try {
        const newProduct = new Product({ name, imageGallery, subtitle, description });
        const product = await newProduct.save();
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Update a product by ID
router.put('/:id', async (req, res) => {
    const { name, imageGallery, subtitle, description } = req.body;
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        product.name = name;
        product.imageGallery = imageGallery;
        product.subtitle = subtitle;
        product.description = description;
        await product.save();
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.remove();
        res.json({ message: 'Product removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
