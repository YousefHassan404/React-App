import express from "express";
import getHomePage from "../Controller/HomeCN/getHomePage.js";
const router = express.Router();
export default router;

router.get("/", getHomePage);

router.post("/", (req, res) => {
  res.status(200).send({ success: true });
});
