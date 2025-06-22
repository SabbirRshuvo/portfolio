import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Overview */}
        <div>
          <h2 className="text-xl font-bold">Md Sabbir</h2>
          <p className="text-sm mt-2">
            A passionate front-end developer building modern and responsive web
            interfaces with React and Tailwind CSS.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-2 text-sm">Email: sabbir@email.com</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="mt-2 text-sm">Rajshahi, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-600" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-sky-500" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10">
        © {new Date().getFullYear()} Md Sabbir. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
