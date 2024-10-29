// import express from "express";
// // import productsDB from "../Utils/DB/productsDB.js";
// import getProductsList from "../Controller/ProductsCN/getProductsList.js";
// import getProductById from "../Controller/ProductsCN/getProductById.js";
// import addNewProduct from "../Controller/ProductsCN/addNewProduct.js";
// import delProduct from "../Controller/ProductsCN/delProduct.js";
// const router = express.Router();
// export default router;

// router.get("/api/products", getProductsList);
// router.get("/api/products/:id", getProductById);
// router.post("/api/products", addNewProduct);
// router.delete("/api/products/:id", delProduct);


import express from "express";
import addProduct from '../Models/ProductsSchema/addProduct.js'

const router = express.Router();

router.post("/product/add",addProduct)

export default router;