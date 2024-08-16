"use client";

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Primary from "@/components/Primary/Primary";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, [])

  return (
    <>
      <Primary />
      <About />
      <Footer />
    </>
  );
}