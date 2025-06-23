import React from "react";
import { FaDownload } from "react-icons/fa";
import animationData from "../../assets/about2.json";
import Lottie from "lottie-react";
const About = () => {
  return (
    <section id="about" className="bg-base-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10 text-center ">
        {/* Left Side: About Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            About Me
          </h2>
          <p className="text-base text-gray-400 mb-4 leading-relaxed">
            I'm Md Sabbir, a passionate web developer who loves turning creative
            ideas into real-world applications. My focus is on building
            responsive, accessible, and engaging user interfaces using modern
            technologies like React, Tailwind CSS, and more.
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            I enjoy problem-solving, collaborating in teams, and continuously
            learning new tools and frameworks. My goal is to work on impactful
            projects that help users and businesses alike.
          </p>
        </div>

        {/* Right Side: Lottie Animation (hidden on small) */}
        <div className="hidden md:block">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default About;
