import React from "react";

const CareerSection = () => {
  return (
    <section className="absolute top-100 left-220 w-full">
      {/* Text Block */}
      <div className="md:top-32 md:left-40 max-w-sm">
        <p className="text-gray-200 text-xs md:text-lg font-light">
          Get ready to{" "}
          <span className="text-teal-400 font-medium">accelerate your career</span>{" "}
          with customized courses and leave your mark in the tech industry.
        </p>
      </div>
    </section>
  );
};

export default CareerSection;
