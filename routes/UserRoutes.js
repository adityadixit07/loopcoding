import express from "express";
import UserController from "../controllers/UserController.js";
import { authorize } from "../utils/Authorize.js";
const UserRoutes = express.Router();

UserRoutes.route("/register").post(UserController.register);
UserRoutes.route("/login").post(UserController.login);

UserRoutes.route("/addcourse/:courseId").post(
  authorize,
  UserController.addCourseToCart
);

// user route 

export default UserRoutes;
