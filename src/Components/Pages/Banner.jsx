import React from "react";
import {
  FaDownload,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      <div className="bg-base-200 min-h-screen flex items-center justify-center px-4 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I'm <span className="text-primary">Md Sabbir</span>
            </h1>
            <h2 className="text-2xl text-gray-600">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Enthusiast",
                  "MERN Stack Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="text-gray-700">
              I’m passionate about building responsive web applications using
              React, Tailwind, and modern JavaScript. I enjoy solving real
              problems and turning ideas into useful interfaces.
            </p>

            <div className="flex gap-4 flex-wrap items-center">
              <a
                href="/src/assets/Sabbir-MERN-Stack-developer.pdf"
                download
                className="btn btn-primary flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </a>

              <div className="flex gap-4  flex-wrap">
                <a
                  href="https://www.linkedin.com/in/sabbir-rahman-shuvo-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary flex items-center gap-2"
                >
                  <FaLinkedin className="text-2xl" />
                </a>

                <a
                  href="https://github.com/SabbirRshuvo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary flex items-center gap-2"
                >
                  <FaGithub className="text-2xl" />
                </a>

                <a
                  href="https://www.facebook.com/sabbirkhan.sk.944"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary flex items-center gap-2"
                >
                  <FaFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="/src/assets/bg.jpg"
              alt="Md Sabbir"
              className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
