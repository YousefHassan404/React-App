import "dotenv/config";
import "colors";
import express from "express";
import mongoose from "mongoose"; 
const app = express();


const PORT = process.env.PORT; 
const CLIENT_URL = process.env.CLIENT_URL;
const MONGODB_URI = process.env.MONGODB_URI; 

/* models Imports */
import { Product } from "./Models/ProductsSchema/addProduct.js";
import { User } from "./Models/UsersSchema/addUser.js";

// Uncomment if CORS is needed
import cors from 'cors';
app.use(cors({
  origin: CLIENT_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB and start the server
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER==> `.bgRed, `http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });










/******************************************************/
/****************COURSES==>CRUD********************* */
/******************************************************/






app.post("/api/courses/add", (req, res) => {
  console.log(req.body);
  Product.create(req.body)
    .then(() => {
      console.log("Successfully added a user");
      res.status(201).send("Product added successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error creating user");
    });
});

app.get("/api/courses/", (req, res) => {
  Product.find()
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "An error occurred while fetching products" });
    });
});

app.get("/api/courses/:id", (req, res) => {
  const productId = req.params.id; 

  Product.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(product);
    })
    .catch((err) => {
      console.error(err); 
      res
        .status(500)
        .json({ error: "An error occurred while fetching the product" });
    });
});


app.delete("/api/courses/delete/:id", (req, res) => {
  const productId = req.params.id; 

  Product.findByIdAndDelete(productId)
    .then((deletedProduct) => {
      if (!deletedProduct) {
        return res.status(404).json({ error: "Product not found" }); 
      }
      res.status(200).json({ message: "Product deleted successfully" }); 
    })
    .catch((err) => {
      console.error(err); 
      res.status(500).json({ error: "An error occurred while deleting the product" }); 
    });
});



app.put("/api/courses/:id", (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body; 

  Product.findByIdAndUpdate(productId, updatedData, { new: true })
    .then((updatedProduct) => {
      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json({ product: updatedProduct }); 
    })
    .catch((err) => {
      console.error(err); 
      res.status(500).json({ error: "An error occurred while updating the product" }); 
    });
});



















/************************************************ */
/*****************Users==>CRUD******************* */
/************************************************ */






app.post("/api/users/add", (req, res) => {
  console.log(req.body);
  
  User.create(req.body)
    .then((newUser) => { // Get the created user instance
      console.log("Successfully added a user");
      res.status(201).json(newUser); // Send the newly created user as response
    })
    .catch((err) => {
      console.error("Error creating user:", err); // Log the error for debugging
      res.status(500).json({ error: "Error creating user" }); // Send a JSON error response
    });
});

app.get("/api/users/", (req, res) => {
  User.find()
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "An error occurred while fetching products" });
    });
});

app.get("/api/users/:id", (req, res) => {
  const UserId = req.params.id; 

  User.findById(UserId)
    .then((User) => {
      if (!User) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(User);
    })
    .catch((err) => {
      console.error(err); 
      res
        .status(500)
        .json({ error: "An error occurred while fetching the User" });
    });
});


app.get("/api/users/email/:email", (req, res) => {
  const userEmail = req.params.email; // Get the email from the URL params
  console.log("Searching for user with email:", userEmail);
  
  // Search for the user by email
  User.findOne({ email: userEmail })
    .then((user) => {
      if (!user) {
        console.log("User not found.");
        return res.status(200).json(false);
      }
      console.log("User found:", user);
      res.status(200).json(true);
    })
    .catch((err) => {
      console.error("Error fetching user:", err);  // More detailed error logging
      res.status(500).json({
        error: "An error occurred while fetching the user",
      });
    });
});


app.delete("/api/users/delete/:id", (req, res) => {
  const UserId = req.params.id; 

  User.findByIdAndDelete(UserId)
    .then((deletedUser) => {
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" }); 
      }
      res.status(200).json({ message: "User deleted successfully" }); 
    })
    .catch((err) => {
      console.error(err); 
      res.status(500).json({ error: "An error occurred while deleting the User" }); 
    });
});



app.put("/api/users/:id", (req, res) => {
  const UserId = req.params.id;
  const updatedData = req.body; 

  User.findByIdAndUpdate(UserId, updatedData, { new: true })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ User: updatedUser }); 
    })
    .catch((err) => {
      console.error(err); 
      res.status(500).json({ error: "An error occurred while updating the User" }); 
    });
});
