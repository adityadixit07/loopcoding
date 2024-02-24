import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./user/Register";
import Login from "./user/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import InstructorProfile from "./instructor/InstructorProfile";
import PageNotFound from "./components/PageNotFound";
import AdminLogin from "./admin/AdminLogin";
import DashBoard from "./admin/DashBoard";
import Profile from "./user/Profile";
import { useSelector } from "react-redux";
import UserCart from "./user/UserCart";
import AdminRoute from "./AdminRoute";
import CourseForm from "./admin/CourseForm";
// import PrivateRoute from "./utils/PrivateRoute";
const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />

        {/* user */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<UserCart />} />

        {/* instructors */}
        <Route path="/instructor-profile" element={<InstructorProfile />} />

        {/* admin */}
        <Route path="/admin" element={<AdminLogin />} />

        <Route element={<AdminRoute isAdmin={isAdmin} />}>
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/admin/course-form" element={<CourseForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
