import React from "react";

import animationData from "../../assets/education.json";
import Lottie from "lottie-react";

const Education = () => {
  return (
    <section id="education" className="py-4 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Education Details */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 ">
            My Education
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Here's a quick look at my academic journey.
          </p>

          <div className="space-y-6">
            {/* Degree 1 */}
            <div className="bg-base-100 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary">
                Bachelor of Social Science (BSS)
              </h3>
              <p className="text-sm text-gray-500">
                National University, Bangladesh
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Studying Political Science under the Honours program. Focused on
                modern governance, South Asian politics, and public
                administration.
              </p>
            </div>
            {/* Add more degrees here if needed */}
            {/* Example:
            <div className="bg-base-100 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-sm text-gray-500">Your College Name</p>
              <p className="text-sm text-gray-600 mt-2">
                Short description here.
              </p>
            </div> */}
          </div>
        </div>

        {/* Right Side - Lottie Animation (hidden on small) */}
        <div className="hidden md:block">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Education;
