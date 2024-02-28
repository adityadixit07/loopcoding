import express from "express";
import { textTranslation } from "../controllers/BlogController.js";
const BlogRoutes = express.Router();

BlogRoutes.route("/translate").post(textTranslation);

export default BlogRoutes;
