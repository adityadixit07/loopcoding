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
const App = () => {
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
        <Route path="/user-profile" element={<Profile />} />




        {/* instructors */}
        <Route path="/instructor-profile" element={<InstructorProfile />} />

        {/* admin */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
