import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import Instructions from "./pages/Instructions"; // Added this line
import Login from "./pages/Login";
import FeePortal from "./pages/FeePortal";
import FeeDashboard from "./pages/FeeDashboard"; // Added this line
import History from "./pages/History";
import Vision from "./pages/Vision";
import Anthem from "./pages/Anthem";
import SchoolHours from "./pages/SchoolHours";
import Founder from "./pages/Founder";
import Principal from "./pages/Principal";
import Faculty from "./pages/Faculty";
import AdminStaff from "./pages/AdminStaff";
import PortalLogin from "./pages/PortalLogin";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fee-portal" element={<FeePortal />} />
          <Route path="/fee-dashboard" element={<FeeDashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/anthem" element={<Anthem />} />
          <Route path="/school-hours" element={<SchoolHours />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/admin-staff" element={<AdminStaff />} />
          <Route path="/portal-login" element={<PortalLogin />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
