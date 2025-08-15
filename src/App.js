import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Updates from "./pages/NutricitaUpdates.js"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
    </Router>
  );
}
