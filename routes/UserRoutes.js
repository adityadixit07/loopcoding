import express from "express";
import UserController from "../controllers/UserController.js";
import { authorize } from "../utils/AuthorizeUtils.js";

const UserRoutes = express.Router();

UserRoutes.route("/register").post(UserController.register);
UserRoutes.route("/login").post(UserController.login);

UserRoutes.route("/addcourse/:courseId").post(
  authorize,
  UserController.addCourseToCart
);

UserRoutes.route("/profile").get(authorize, UserController.userProfile);

// update profile
UserRoutes.route("/profile/update/:id").put(UserController.updateProfile);

export default UserRoutes;
