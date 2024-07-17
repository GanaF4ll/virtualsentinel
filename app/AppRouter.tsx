// AppRouter.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home"; // Assurez-vous que le chemin d'importation est correct
import Download from "../pages/Download";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
