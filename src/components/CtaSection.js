"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CtaSection() {
  const ctaRef = useRef(null);

  useEffect(() => {
    if (ctaRef.current) {
      gsap.from(ctaRef.current.querySelectorAll(".animate-cta"), {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <section ref={ctaRef} className="py-20 bg-blue-600 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="animate-cta text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your IB Learning Experience?
        </h2>
        <p className="animate-cta text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of IB students who have achieved their academic goals
          with Nailib's video resources.
        </p>
        <div className="animate-cta flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105">
            Start Your Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-blue-500 transition duration-300">
            Explore Our Plans
          </button>
        </div>
        <p className="animate-cta text-blue-200 mt-6">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
