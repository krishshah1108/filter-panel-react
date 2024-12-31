import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DoctorList from "./components/DoctorList";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-10">
        <Header />
      </div>

      <div className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctorListing" element={<DoctorList />} />
        </Routes>
      </div>

      <div className="sticky bottom-0 z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;
