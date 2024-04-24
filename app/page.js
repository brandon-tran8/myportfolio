// import React from "react";
// import Header from "./pagelayout/Header";
// import MainContent from "./pagelayout/MainContent";
// import Footer from "./pagelayout/Footer";
// import "./PageDesign.css";

// const HomePage = () => {
//   return (
//     <div className="wrapper">
//       <div className="content-wrap">
//         <Header />
//         <MainContent />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

"use client";
import Header from "./sections/header";
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

export default function HomePage() {
  return (
    <>
      <body className="text-black">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </body>
    </>
  );
}
