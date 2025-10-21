
"use client"
import { useEffect } from "react";
import Header from "./components/Header/Header";

import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Integration from "./components/Integration/Integration";
import Features from "./components/Features/Features";
import Download from "./components/Download/Download";
import SignUp from "./components/SignUp/SignUp";

import Footer from "./components/Footer/Footer";
import { isMobile } from "react-device-detect";


export default function Home() {
  useEffect(() => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;


    if (isMobile) {
      window.scrollTo(0, 550);
      if (scrollPosition > 540) {
        document.documentElement.style.scrollBehavior = "smooth"
      }
    } else {
      window.scrollTo(0, 670);
      if (scrollPosition > 650) {
        document.documentElement.style.scrollBehavior = "smooth"
      }
    }
  }, [])


  return (
    <>
      <Header />
      <main>
        <div>
          <Hero />
          <Experience />
          <Integration />
          <Features />
          <Download />
          <SignUp />
        </div>
      </main>
      <Footer />
    </>
  );
}