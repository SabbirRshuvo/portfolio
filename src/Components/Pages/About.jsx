import React from "react";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 bg-base-200">
      <div className="max-w-3xl mx-auto px-4  items-center text-center">
        {/* About Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            About Me
          </h2>
          <h4 className="text-center py-4">
            Get to know a little more about me and what i do.
          </h4>
          <p className="text-base text-gray-400 mb-4 leading-relaxed">
            I'm Md Sabbir, a passionate web developer focused on building
            modern, responsive, and user-friendly web applications. I enjoy
            turning ideas into reality with clean code and intuitive design.
          </p>
          <p className="text-base text-gray-400 mb-6 leading-relaxed">
            I specialize in React, Tailwind CSS, JavaScript, and love working on
            the frontend. I’m always eager to learn new technologies and
            collaborate on meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
