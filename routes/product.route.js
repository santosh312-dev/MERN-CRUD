const express = require("express");
const productRouter = express.Router();
const {
  getAllProducts,
  updateProductById,
  getProductById,
  createProduct,
  deleteProductById,
} = require("../controllers/product.controller");

//using middleware to fetch the data from request body
productRouter.use(express.json());

// define the home page route
productRouter.get("/", (req, res) => {
  res.send("Product home page");
});
// productRouter.get("/products", (req, res) => {
//   res.send("Display all products");
// });

//after making controller
productRouter.get("/products", getAllProducts);

// productRouter.get("/products/:id", (req, res) => {
//   res.send(`Display a product with id: ${req.params.id}`);
// });

// after AbortController
productRouter.get("/products/:id", getProductById);

// productRouter.post("/products", (req, res) => {
//   const { name, size, price } = req.body;
//   res.send(
//     `Creating product with details: Name: ${name} , Size: ${size} , Price: ${price}`
//   );
// });

//after controller
productRouter.post("/products/", createProduct);
// productRouter.put("/products/:id", (req, res) => {
//   res.send(`Update a product with id: ${req.params.id}`);
// });

//after controller
productRouter.put("/products/:id", updateProductById);

// productRouter.delete("/products/:id", (req, res) => {
//   res.send(`Delete a product with id: ${req.params.id}`);
// });

//after controller
productRouter.delete("/products/:id", deleteProductById);
module.exports = productRouter;
