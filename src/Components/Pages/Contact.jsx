import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className=" text-gray-400 py-4 px-4 md:px-16" id="contact">
      <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-sky-500" size={20} />
            <span>sabbirhshuvo11@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-sky-500" size={20} />
            <span>+8801734066870</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-sky-500" size={20} />
            <span>Rajshahi, Bangladesh</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/sabbirkhan.sk.944"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-800"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://github.com/SabbirRshuvo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sabbir-rahman-shuvo-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 hover:text-sky-900"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-gray-100 p-6 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
          <button type="submit" className="btn btn-secondary w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
