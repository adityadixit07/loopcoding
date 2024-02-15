import express from "express";
import UserController from "../controllers/UserController.js";
import authorize from "../utils/Authorize.js";
import { User } from "../models/User.js";

const UserRoutes = express.Router();

UserRoutes.route("/register").post(UserController.register);
UserRoutes.route("/login").post(UserController.login);

// UserRoutes.route('/profile').get(authorize,UserController.profile)

UserRoutes.route("/addcourse/:courseId").post(
  authorize,
  UserController.addCourseToCart
);

export default UserRoutes;
