"use client";
export default function StepCard({ number, title, description }) {
  return (
    <div className=" flex justify-center align-items step-card bg-gradient-to-b from-blue-200 to-amber-200 rounded-xl h-full w-2/3  p-6 shadow-lg relative ransition-transform duration-300 hover:scale-110">
      <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      {/* <img src="/images/Erit Briggs.jpg" alt="Erit Briggs" /> */}

      <h3 className="text-xl font-semibold text-black mt-4 mb-3">{title}</h3>
      <p className="text-gray-950">{description}</p>
    </div>
  );
}
