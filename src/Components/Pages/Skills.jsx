import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiFirebase,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiNetlify,
  SiFramer,
  SiJsonwebtokens,
} from "react-icons/si";
const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-purple-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
  { name: "Netlify", icon: <SiNetlify className="text-blue-400" /> },
];
const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 cursor-pointer">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="card bg-base-200 shadow hover:shadow-xl hover:scale-105 transition-transform duration-200"
            >
              <div className="card-body items-center text-center p-4">
                <div className="text-4xl mb-2">{skill.icon}</div>
                <h3 className="text-sm font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
