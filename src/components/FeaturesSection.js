"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FeatureCard from "./FeatureCard";
import dynamic from "next/dynamic";
import SplitType from "split-type";
// Import SplitType dynamically to prevent SSR issues
// const SplitType = dynamic(() => import("split-type"), { ssr: false });
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function FeaturesSection() {
  const featuresRef = useRef(null);
  const stepsRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      // First animation: Step grows in size
      gsap.fromTo(
        step,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          onComplete: () => {
            // Apply SplitType to text after step animation
            const textElement = step.querySelector(".head-text");
            if (textElement) {
              const splitText = new SplitType(textElement, { types: "chars" });

              // Animate each character
              gsap.fromTo(
                splitText.chars,
                { opacity: 0, y: 50, scale: 0.8 },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 1,
                  ease: "back.out(1.7)",
                  stagger: 0.05,
                }
              );
            }

            // Second animation: Text falls from above AFTER step animation completes
            gsap.fromTo(
              step.querySelector(".step-text"),
              { y: -50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "bounce.out",
              }
            );

            // Third animation: Icon appears with a bouncing effect
            const iconElement = step.querySelector(".icon");
            if (iconElement) {
              gsap.fromTo(
                iconElement,
                { opacity: 0, y: -50, rotate: -10 },
                {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  duration: 0.8,
                  ease: "bounce.out",
                  delay: 0.5,
                  onComplete: () => {
                    // Icon swings like a bell
                    gsap.to(iconElement, {
                      rotate: [0, -10, 10, -8, 8, -5, 5, 0],
                      duration: 1,
                      ease: "power2.out",
                      repeat: 2,
                      yoyo: true,
                    });
                  },
                }
              );
            }
          },
        }
      );
    });
  }, []);

  // useEffect(() => {
  //   if (!featuresRef.current) return;

  //   setTimeout(() => {
  //     const cards = featuresRef.current.querySelectorAll(".feature-card");

  //     console.log("Feature cards found:", cards);

  //     gsap.from(cards, {
  //       y: 100,
  //       opacity: 0,
  //       stagger: 0.3,
  //       duration: 1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: featuresRef.current,
  //         start: "top 90%",
  //         end: "bottom 50%",
  //         scrub: 1, // Smooth animation while scrolling
  //         toggleActions: "play none none none",
  //         // markers: true, // Debugging markers
  //       },
  //     });

  //     // Ensure ScrollTrigger updates
  //     ScrollTrigger.refresh();
  //   }, 100);
  // }, []);

  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Complex Concepts Simplified",
      description:
        "Our expert educators break down challenging IB topics into clear, digestible explanations with real-world examples.",
      image: "/images/Text Solution.jpeg",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Study Anywhere, Anytime",
      description:
        "Access our comprehensive video library on any device, allowing you to study efficiently whenever and wherever suits you best.",
      image: "/images/image solution.jpeg",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Exam-Focused Strategy",
      description:
        "Learn proven techniques for approaching IB exams, common pitfalls to avoid, and strategies to maximize your score.",
      image: "/images/IB Tutor.jpeg",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "IB Expert Educators",
      description:
        "Learn from experienced IB teachers and examiners who understand exactly what's needed to achieve top grades.",
      image: "/images/Text Solution.jpeg",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      title: "Continually Updated",
      description:
        "Our content is regularly reviewed and updated to reflect the latest IB curriculum changes and examination trends.",
      image: "/images/Text Solution.jpeg",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
      title: "Interactive Q&A",
      description:
        "Submit your questions directly to our team of educators and receive personalized explanations to your specific challenges.",
      image: "/images/Text Solution.jpeg",
    },
  ];

  return (
    <section
      ref={featuresRef}
      className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Nailib Videos Are Essential for IB Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our video resources are designed specifically to address the
            challenges IB students face
          </p>
        </div>

        <div className="flex flex-col justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="flex flex-col items-center justify-center  bg-gray-50 w-full mx-0 h-auto p-6 rounded-lg "
            >
              <h2
                ref={textRef}
                className="head-text text-2xl md:text-5xl lg:text-6xl  mt-0 break-words whitespace-normal leading-tight font-bold mb-10 text-gray-900"
              >
                {feature.title}
              </h2>
              {/* Left Section: Icon */}
              {/* Right Section: Title & Description */}
              <div className="w-full flex justify-around items-center   ">
                <div className="flex flex-col w-40 gap-5 justify-end relative sm:left-0 md:left-10 lg:left-24 xl:left-44">
                  <div className="icon bg-gradient-to-tl bg-blue-800 to-green-800 w-32 h-24 ml-5 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <p className="step-text text-white bg-gradient-to-b from-emerald-800 to-green-950 rounded-2xl p-4 shadow-md ">
                    {feature.description}
                  </p>
                </div>
                {/* Center Section: Large Image */}

                <img
                  src={feature.image}
                  alt="Feature Image"
                  className="w-full h-[400px] justify-end max-w-lg md:max-w-xl lg:max-w-2xl mx-auto rounded-lg shadow-md object-cover "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
