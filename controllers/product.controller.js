const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    if (!allProducts || allProducts.length === 0) {
      return res.json({
        success: false,
        message: "There is no product available!!",
      });
    }
    // if we have products
    res.status(200).json({ success: true, products: allProducts });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal server error: ${error.message}`,
    });
  }
};

const updateProductById = async (req, res) => {
  const id = req.params.id;
  const { name, size, price } = req.body;
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      { name, size, price },
      { new: true }
    );
    if (!updateProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, product: updateProduct });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal server error: ${error.message}`,
    });
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, product: product });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal server error: ${error.message}`,
    });
  }
};
const createProduct = async (req, res) => {
  const { name, size, price } = req.body;
  try {
    const newProduct = await Product.insertOne({ name, size, price });
    if (!newProduct) {
      return res
        .status(404)
        .json({ success: false, message: "new product not created" });
    }
    res.status(200).json({ success: true, product: newProduct });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal server error: ${error.message}`,
    });
  }
};

const deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res
        .status(404)
        .json({ success: false, message: "product not created" });
    }
    res.status(200).json({ success: true, product: deleteProduct });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal server error: ${error.message}`,
    });
  }
};
module.exports = {
  getAllProducts,
  updateProductById,
  getProductById,
  createProduct,
  deleteProductById,
};
