import { Admin } from "../models/Admin.js";
import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all fields" });
    }
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    if (admin.password !== password) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(200).json({
      success: true,
      message: ` logged in successfully`,
      data: admin,
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


