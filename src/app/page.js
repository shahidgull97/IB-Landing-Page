// pages/index.js
"use client";
import { useEffect } from "react";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "@/components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";

export default function Home() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    console.log(typeof window);

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      console.log("scrolltrigger registered");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <Head>
        <title>Nailib Videos | Premium IB Study Resources</title>
        <meta
          name="description"
          content="Enhance your IB studies with Nailib's comprehensive video resources. Clear explanations, exam strategies, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
