import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-16 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Name & Overview */}
        <div>
          <h3 className="text-xl font-bold mb-2">Md Sabbir</h3>
          <p className="text-sm text-gray-300">
            I'm a MERN Stack Web Developer passionate about building
            user-friendly, scalable and secure web applications.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="flex items-center gap-2 text-gray-300">
            <FaEnvelope className="text-blue-400" /> sabbirhshuvo11@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <FaPhoneAlt className="text-blue-400" /> +8801734066870
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-blue-400" /> Rajshahi, Bangladesh
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Me</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/sabbirkhan.sk.944"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://github.com/SabbirRshuvo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sabbir-rahman-shuvo-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Md Sabbir. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
