"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import StepCard from "./StepCard";

export default function HowItWorksSection() {
  // const howItWorksRef = useRef(null);

  // useEffect(() => {
  //   if (howItWorksRef.current) {
  //     gsap.from(howItWorksRef.current.querySelectorAll(".step-card"), {
  //       x: -50,
  //       opacity: 0,
  //       stagger: 0.2,
  //       duration: 0.8,
  //       scrollTrigger: {
  //         trigger: howItWorksRef.current,
  //         start: "top 70%",
  //       },
  //     });
  //   }
  // }, []);
  const howItWorksRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { x: 400, opacity: 0 }, // Start position (right side)
        {
          x: 150, // Move to original position
          opacity: 1,
          duration: 1,
          delay: index * 0.3, // Delay each step
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%", // Animation starts when 80% of the element is in view
            toggleActions: "play none none reverse", // Plays forward, reverses on scroll up
          },
        }
      );
    });
  }, []);

  const steps = [
    {
      number: 1,
      title: "Create Your Account",
      description:
        "Sign up for a Nailib account in under 2 minutes. Choose between our flexible subscription plans.",
    },
    {
      number: 2,
      title: "Select Your Subjects",
      description:
        "Choose the IB subjects you're studying from our comprehensive library of course content.",
    },
    {
      number: 3,
      title: "Watch & Learn",
      description:
        "Stream high-quality video lessons taught by IB experts, organized by topic and difficulty.",
    },
    {
      number: 4,
      title: "Track Your Progress",
      description:
        "Monitor your learning journey with our progress tracking tools and recommended study paths.",
    },
  ];

  return (
    <section
      ref={howItWorksRef}
      className="py-20 bg-gradient-to-tl from-blue-200 to-fuchsia-200 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Nailib Videos Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is simple. Follow these steps to begin your enhanced
            IB learning journey
          </p>
        </div>

        <div className="flex flex-col h-full  gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="opacity-0 transform h-44"
            >
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Need help getting started? Our support team is available 24/7 to
            assist you with any questions.
          </p>
        </div>
      </div>
    </section>

    // <section
    //   ref={howItWorksRef}
    //   className="py-20 bg-blue-50 px-4 sm:px-6 lg:px-8"
    // >
    //   <div className="container mx-auto max-w-7xl">
    //     <div className="text-center mb-16">
    //       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    //         How Nailib Videos Work
    //       </h2>
    //       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    //         Getting started is simple. Follow these steps to begin your enhanced
    //         IB learning journey
    //       </p>
    //     </div>

    //     <div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth gap-5 no-scrollbar w-full">
    //       {steps.map((step, index) => (
    //         <StepCard
    //           key={index}
    //           number={step.number}
    //           title={step.title}
    //           description={step.description}
    //         />
    //       ))}
    //     </div>

    //     <div className="mt-16 text-center">
    //       <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
    //         Need help getting started? Our support team is available 24/7 to
    //         assist you with any questions.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
}
