import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import CourseRoutes from "./routes/CourseRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import dbConnect from "./connection/dbConnect.js";
import AdminRoutes from "./routes/AdminRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(cors({ origin: "*" }));
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cookieParser({ httpOnly: true }));

dbConnect();


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



if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/dist"));
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const staticPath = path.join(__dirname, "./client/dist");
app.use(express.static(staticPath));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});
