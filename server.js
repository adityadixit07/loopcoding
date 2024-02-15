import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import CourseRoutes from "./routes/CourseRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import dbConnect from "./connection/dbConnect.js";
import AdminRoutes from "./routes/AdminRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cookieParser({ httpOnly: true }));

dbConnect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// routes
app.use("/api/user", UserRoutes);
app.use("/api/courses", CourseRoutes);
app.use("/api/admin", AdminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} url: http://localhost:${PORT}`
  );
});
