import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import DoctorList from './components/DoctorList';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Header />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctorListing" element={<DoctorList />} />
        </Routes>
      </div>

      <div className="sticky bottom-0 z-10 bg-white shadow-md">
        <Footer />
      </div>
    </div>
  );
};

export default App;
