import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Course } from "../models/Course.js";
import dotenv from "dotenv";
dotenv.config();
class UserController {
  static register = async (req, res) => {
    const { name, email, password } = req.body;
    // const avatar = req.file;
    // if (!avatar) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Please upload an image" });
    // }
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all fields" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    const user = new User({
      name,
      email,
      password: hashedPassword,
      avatar: {
        public_id: "aditya",
        url: "imageurl",
      },
    });
    await user.save();
    res.status(200).json({
      success: true,
      message: `Welcome, ${name}! Happy Learning 🚀`,
      data: user,
      token,
    });
  };

  static login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    const cookieOptions = {
      httpOnly: true,
      expiresIn: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
    };
    res.cookie("token", token, cookieOptions);
    user.password='mat dekh bhai'
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: user,
      token,
    });
  };

  static addCourseToCart = async (req, res) => {
    try {
      const courseId = req.params.courseId;
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      // if user is logged in then add course tocar to tuser model and also te course detail in cartmodel of cartItems array
      if (req.user) {
        const user = await User.findOne({ email: req.user.email }).select(
          "-password"
        );
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  static viewPurchasedCourse = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      const purchasedCourse = await user
        .populate("purchasedCourses")
        .execPopulate();
      // execPoluluate kya karega ??
      // 1. It will populate the purchasedCourses array of user model with the course details
      // 2. It will return the user with the populated purchasedCourses array
      if (user) {
        return res.status(200).json({
          success: true,
          message: "Your Purchased history fetched succesfully.",
          data: purchasedCourse,
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  static userProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user._id).select("-password");
      if (user) {
        return res.status(200).json({
          success: true,
          message: "User profile fetched successfully",
          data: user,
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  // logut user
  static logout = async (req, res) => {
    res.cookie("token", "none", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  };

  // update user profile
  static updateProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
          user.password = req.body.password;
        }
        const updatedUser = await user.save();
        return res.status(200).json({
          success: true,
          message: "User profile updated successfully",
          data: updatedUser,
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
}

export default UserController;
