import React from "react";
import Header from "./pagelayout/Header";
import MainContent from "./pagelayout/MainContent";
import Footer from "./pagelayout/Footer";
import "./PageDesign.css";

const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="content-wrap">
        <Header />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
