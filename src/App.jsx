import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

const App = () => {
  return (
    <div className='flex flex-col px-6 justify-between h-screen'>
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
};

export default App;
