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
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect, useState } from "react";
import { Loading } from "./assets/Loader";
import CourseDetail from "./components/CourseDetail";
import UpdateCourse from "./admin/UpdateCourse";
import AdminProfile from "./admin/AdminProfile";
import AssistanceBoard from "./assistance/AssistanceBoard";
import ForgotPassword from "./user/ForgotPassword";
const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { isAdmin } = useSelector((state) => state.admin);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:title/:id" element={<CourseDetail />} />

        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />

        {/* user */}
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<UserCart />} />
        </Route>

        {/* instructors */}
        <Route path="/instructor-profile" element={<InstructorProfile />} />

        {/* admin */}
        <Route path="/admin" element={<AdminLogin />} />

        <Route element={<AdminRoute isAdmin={isAdmin} />}>
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/admin/create-course" element={<CourseForm />} />
          <Route
            path="/admin/edit-course/:title/:id"
            element={<UpdateCourse />}
          />
          {/* update admin profile */}
          <Route path="/admin/profile" element={<AdminProfile />} />
        </Route>
      </Routes>
      <AssistanceBoard />
    </BrowserRouter>
  );
};

export default App;
