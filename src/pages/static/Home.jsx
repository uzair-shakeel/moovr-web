import React from "react";
import Navbar from "../../components/static/Navbar";
import HeroSection from "../../components/static/Hero";
import Discover from "../../components/static/Discover";
import Banner from "../../components/static/Banner";
import Description from "../../components/static/Description";
import FAQs from "../../components/static/FAQs";
import Footer from "../../components/static/Footer";
import Download from "../../components/static/Download";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1180px] mx-auto text-start">
        <HeroSection />
        <Discover />
        <Banner />
        <Description />
        <Download />
        <FAQs />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
