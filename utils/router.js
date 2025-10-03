import express from "express";
import { getURL, handleShortURL } from "../controller/url-controller.js";

const router = express.Router();

router.post("/", handleShortURL);
router.get("/:shortid", getURL);

export default router;