"use client";
export default function FeatureCard({
  icon,
  index,
  title,
  description,
  image,
}) {
  return (
    <img
      src={image}
      alt={title}
      className="mx-auto left-0 rounded-2xl w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto object-cover"
    />
  );
}
