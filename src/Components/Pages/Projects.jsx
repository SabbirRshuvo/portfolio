import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

const projects = [
  {
    name: "StayNest",
    image: "https://i.ibb.co/KcJJhmS6/stay-nest.png",
    live: "https://stay-nest-hotel-booking.web.app/",
    github: "https://github.com/SabbirRshuvo/StayNest-hotel-booking",
    overview: `A hotel booking management site. User can book hotels based on location room type and price and stay with guest. `,
    tech: [
      "React",
      "JavaScript",
      "Context API",
      "Firebase",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Lottie React",
      "ImgBB",
      "Vercel",
      "Mongoose",
    ],
  },
  {
    name: "Panto-Furniture",
    image: "https://i.ibb.co.com/B24dCzKY/panto-furniture.png",
    live: "https://radiant-kulfi-7f1855.netlify.app/",
    github: "https://github.com/SabbirRshuvo/panto-furniture-landing-page",
    overview: `Panto Furniture is a responsive landing page for a furniture store.
    It features a modern design, product showcases, and anyone can Add to Cart Products.`,
    tech: [
      "React",
      "JavaScript",
      "Context API",
      "Tailwind CSS",
      "Netlify",
      "SweetAlert2",
      "Swiper",
      "React Router",
      "React Icons",
    ],
  },
  {
    name: "MicroTask",
    image: "https://i.ibb.co.com/xtg968cq/micro-task-logo.png",
    live: "https://micro-task-earning-56ea3.web.app/",
    github: "https://github.com/SabbirRshuvo/micro-task-earning-client",
    overview: `A micro-tasking platform for buyers and workers.
Users earn coins by completing tasks.
Includes dashboard, payment & role-based access.`,
    tech: [
      "React",
      "JavaScript",
      "Context API",
      "Firebase",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Lottie React",
      "ImgBB",
      "Vercel",
    ],
  },
];
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <div className="py-16 bg-white text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="w-full px-4 md:px-12">
          <Slide direction="up" triggerOnce cascade damping={0.1}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              mousewheel={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              modules={[Autoplay]}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-blue-700"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-blue-600"
                        >
                          <FaGithub size={18} />
                        </a>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-semibold mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {project.overview}
                      </p>
                      <button
                        className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        Show Details
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Slide>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl cursor-pointer"
              >
                ✕
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.name}
              </h3>
              <p className="text-gray-600 mb-2 italic">
                {selectedProject.intro}
              </p>
              <p className="text-gray-700 mb-4">{selectedProject.overview}</p>
              <p className="font-semibold mb-1">Used Technology:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-sm text-blue-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
                >
                  Live Link
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
