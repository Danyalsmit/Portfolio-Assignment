"use client";
import React from "react";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ProjectSection from "./Components/Projects";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <ProjectSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
