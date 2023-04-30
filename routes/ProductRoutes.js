const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel');

// Get all products
router.get('/getAllTour', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send({
            success: true,
            data: products
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Get a single product by ID
router.post('/getSingleTour', async (req, res) => {
    try {
        const product = await Product.findById(req.body.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).send({
            success: true,
            data: product
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Create a new product
router.post('/addProduct', async (req, res) => {
    const { name, imageGallery, subtitle, description } = req.body;
    try {
        const newProduct = new Product({ name, imageGallery, subtitle, description });
        const product = await newProduct.save();
        res.status(200).send({
            success: true,
            data: product
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Update a product by ID
router.post('/updateSingleTour', async (req, res) => {
    const { id, name, imageGallery, subtitle, description } = req.body;
    try {
        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        product.name = name;
        product.imageGallery = imageGallery;
        product.subtitle = subtitle;
        product.description = description;
        await product.save();
        res.status(200).send({
            success: true,
            message: "Tour Updated Successfully"
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Delete a product by ID
router.post('/deleteProduct', async (req, res) => {
    try {
        const { id } = req.body;
        const product = await Product.deleteOne({ _id: id });
        if (product.deletedCount === 0) {
            returnres.status(404).send({ success: false, message: "Product Not Found" })
        }
        return res.status(200).send({ success: true, message: "Deleted" })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
