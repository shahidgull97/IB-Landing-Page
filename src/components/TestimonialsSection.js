"use client";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      testimonial:
        "Nailib's video explanations for IB Physics completely changed how I understand the subject. I went from struggling to get a 5 to confidently achieving a 7 in my final exams.",
      name: "Ainsley Cook",
      achievement: "IB Physics HL, Score: 7",
      media: "/images/Ainsley Cook.jpeg", // Image example
    },
    {
      rating: 5,
      testimonial:
        "The exam strategies I learned from Nailib videos helped me organize my study time efficiently. Their step-by-step approach to complex topics in Biology made everything so much clearer.",
      name: "Sarah K.",
      achievement: "IB Biology HL, Score: 6",
      media: "/videos/testimonial1.mp4", // Video example
    },
    {
      rating: 5,
      testimonial:
        "As someone who struggled with Mathematics, Nailib's video resources were a game-changer. The visual explanations and practice problems helped me build confidence and improve my grade.",
      name: "Amora Lindsey.jpg",
      achievement: "IB Mathematics SL, Score: 7",
      media: "/images/Amora Lindsey.jpg",
    },
    {
      rating: 5,
      testimonial:
        "I found the structured breakdowns and real-world examples incredibly helpful in my IB Chemistry studies. Nailib's platform is a must-have for any IB student!",
      name: "Lisa R.",
      achievement: "IB Chemistry HL, Score: 6",
      media: "/videos/testimonial2.mp4",
    },
    {
      rating: 5,
      testimonial:
        "I found the structured breakdowns and real-world examples incredibly helpful in my IB Chemistry studies. Nailib's platform is a must-have for any IB student!",
      name: "Erik Briggs",
      achievement: "IB Chemistry HL, Score: 6",
      media: "/images/Erik Briggs.jpg",
    },
    {
      rating: 5,
      testimonial:
        "I found the structured breakdowns and real-world examples incredibly helpful in my IB Chemistry studies. Nailib's platform is a must-have for any IB student!",
      name: "Hazel Barnes",
      achievement: "IB Chemistry HL, Score: 6",
      media: "/images/Hazel Barnes.jpg",
    },
    {
      rating: 5,
      testimonial:
        "I found the structured breakdowns and real-world examples incredibly helpful in my IB Chemistry studies. Nailib's platform is a must-have for any IB student!",
      name: "Katie Mills",
      achievement: "IB Chemistry HL, Score: 6",
      media: "/images/Katie Mills.jpeg",
    },
    {
      rating: 5,
      testimonial:
        "I found the structured breakdowns and real-world examples incredibly helpful in my IB Chemistry studies. Nailib's platform is a must-have for any IB student!",
      name: "Lyla Rogers",
      achievement: "IB Chemistry HL, Score: 6",
      media: "/images/Lyla Rogers.jpeg",
    },
    {
      rating: 5,
      testimonial:
        "I found the structured breakdowns and real-world examples incredibly helpful in my IB Chemistry studies. Nailib's platform is a must-have for any IB student!",
      name: "Katie Mills",
      achievement: "IB Chemistry HL, Score: 6",
      media: "/images/Katie Mills.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Students Say
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Hear from IB students who have transformed their learning experience
          with Nailib Videos
        </p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e3e3e3"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-book-open bg-blue-800 rounded-lg"
          >
            <path d="M12 7v14" />
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
          </svg>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center">
              {/* Media (Image/Video) */}
              {testimonial.media.endsWith(".mp4") ? (
                <video
                  controls
                  className="w-full h-[500px] object-contain rounded-lg mb-4"
                >
                  <source src={testimonial.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={testimonial.media}
                  alt={testimonial.name}
                  className="w-full h-full  object-cover mb-4"
                />
              )}

              {/* Testimonial Content */}
              <p className="text-gray-700 text-sm text-center italic mb-3">
                "{testimonial.testimonial}"
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.achievement}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
