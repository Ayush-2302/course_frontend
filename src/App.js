import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CourseContext from "./context/CourseContext";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import AllCourses from "./component/AllCourses";
import About from "./component/About";


function App() {
  return (
    <CourseContext>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/course" element={<AllCourses />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </CourseContext>
  );
}

export default App;
