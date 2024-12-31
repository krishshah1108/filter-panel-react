import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-1 overflow-hidden'>
        <MainBody />
      </div>
      <Footer />
    </div>
  );
};

export default App;
