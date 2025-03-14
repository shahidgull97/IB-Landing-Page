"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    // console.log(heroRef.current);

    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll(".animate-hero"), {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-blue-600 opacity-5 pattern-dots"></div>
      </div>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="animate-hero text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Master Your IB Subjects with Nailib Videos
            </h1>
            <p className="animate-hero text-xl text-gray-700 mb-8">
              Comprehensive video lessons crafted by IB experts to help you
              excel in your exams. Clear explanations, practical examples, and
              exam strategies at your fingertips.
            </p>
            <div className="animate-hero flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Start Learning Now
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                Try Free Trial
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-hero">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-10"></div>
              <img
                src="/images/nailib dashboard.png"
                alt="IB student learning with Nailib videos"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition hover:scale-110">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-blue-600 ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-hero mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center">
            <span className="text-blue-600 font-semibold">Trusted by</span>
            <span className="ml-2 text-2xl font-bold text-gray-800">
              10,000+
            </span>
            <span className="ml-1 text-gray-600">students</span>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 font-semibold">Covering</span>
            <span className="ml-2 text-2xl font-bold text-gray-800">25+</span>
            <span className="ml-1 text-gray-600">IB subjects</span>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 font-semibold">Average score</span>
            <span className="ml-2 text-2xl font-bold text-gray-800">6.8</span>
            <span className="ml-1 text-gray-600">after using Nailib</span>
          </div>
        </div>
      </div>
    </section>
  );
}
