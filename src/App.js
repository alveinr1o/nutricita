import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Updates from "./pages/NutricitaUpdates.js"
import AfterLogin from "./pages/AfterLogin.js";
import Nutrischool from "./pages/Nutrischool.js";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/AfterLogin" element={<AfterLogin />} />
        <Route path="/nutrischool" element={<Nutrischool />} />
      </Routes>
    </Router>
  );
}
