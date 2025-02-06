import Certificate from "./Pages/Certificate";
import Footer from "./Pages/Footer";
import FormPage from "./Pages/FormPage";
import Login from "./Pages/Login";
import OtpPage from "./Pages/OtpPage";
import Outlet from "./Pages/Outlet";
import Pdf from "./Pages/Pdf";
import "./Styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/outlet" element={<Outlet />} />
            <Route path="/formpage" element={<FormPage />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/pdf" element={<Pdf />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
