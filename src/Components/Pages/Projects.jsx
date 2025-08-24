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
  {
    name: "Solosphare-template",
    image: "https://i.ibb.co.com/xK2YprYZ/solosphare.png",
    live: "https://solosphere-template-e51ee.web.app/",
    github: "https://github.com/SabbirRshuvo/solosphere-template-server",
    overview: `Solosphere Template here have some category of jobs. Like web development, Software Development, Web designer, and in the jobs page anyone can filter by category and search the jobs and sort by deadline `,
    tech: [
      "React",
      "JavaScript",
      "Context API",
      "Firebase",
      "Axios",
      "date-fns",
      "datepicker",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Vercel",
    ],
  },
];
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <div className="py-16 bg-gradient-to-b from-white to-gray-50 text-gray-800">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-orange-500">Projects</span>
        </h2>

        {/* Swiper */}
        <div className="w-full px-4 md:px-12">
          <Slide direction="up" triggerOnce cascade damping={0.1}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                480: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 4 },
              }}
              modules={[Autoplay]}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-48 md:h-56 object-cover"
                      />
                      <div className="absolute top-2 right-2 flex gap-3">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full shadow hover:bg-orange-100 transition"
                        >
                          <FaExternalLinkAlt
                            size={18}
                            className="text-orange-600"
                          />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
                        >
                          <FaGithub size={18} className="text-gray-700" />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 text-center flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600 flex-grow line-clamp-3">
                        {project.overview}
                      </p>
                      <button
                        className="mt-4 text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm cursor-pointer transition"
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

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl cursor-pointer"
              >
                ✕
              </button>

              {/* Modal Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-56 md:h-72 object-cover rounded-md mb-4"
              />

              {/* Modal Content */}
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {selectedProject.name}
              </h3>
              <p className="text-gray-600 mb-2 italic">
                {selectedProject.intro}
              </p>
              <p className="text-gray-700 mb-4">{selectedProject.overview}</p>

              <p className="font-semibold mb-2">Used Technology:</p>
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

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition"
                >
                  Live Link
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded transition"
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
