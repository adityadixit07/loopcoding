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

        {/* instructors */}
        <Route path="/instructor-profile" element={<InstructorProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
