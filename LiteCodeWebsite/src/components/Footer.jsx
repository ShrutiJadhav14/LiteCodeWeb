import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";


const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount:0.3 }} className="bg-gray-900 text-gray-300">
      {/* ===== CTA STRIP ===== */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl font-bold text-white text-center md:text-left">
            Ready to build your next digital product?
          </h3>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Get in Touch →
          </Link>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="LiteCode Logo"
              className="w-12 h-10 object-contain bg-transparent"
            />
            <span className="text-2xl font-extrabold tracking-wide">
              <span className="text-sky-500">Lite</span>
              <span className="text-orange-500">Code</span>
            </span>
          </Link>

          <p className="mt-5 text-sm text-gray-400 leading-relaxed">
            LiteCode builds modern, scalable and secure digital solutions using
            cutting-edge technologies to help businesses grow faster.
          </p>

          <div className="flex gap-4 mt-6">
            {[
                { Icon: Linkedin, link: "#" },
                { Icon: Github, link: "#" },
                { Icon: Twitter, link: "#" },
                { Icon: Instagram, link: "#" },
            ].map(({ Icon, link }, index) => (
                <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-400
                            hover:text-white hover:bg-indigo-600
                            hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]
                            transition-all duration-300"
                >
                <Icon size={18} />
                </a>
            ))}
          </div>

        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-5 relative inline-block">
            Quick Links
            <span className="absolute left-0 -bottom-2 w-8 h-[2px] bg-indigo-600"></span>
          </h4>

          <ul className="space-y-3 text-sm">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-5 relative inline-block">
            Services
            <span className="absolute left-0 -bottom-2 w-8 h-[2px] bg-indigo-600"></span>
          </h4>

          <ul className="space-y-3 text-sm">
            {[
              "Web Development",
              "Blockchain Solutions",
              "AI & ML",
              "Cloud & DevOps",
              "Cyber Security",
              "Mobile App Development",
            ].map((service) => (
              <li key={service}>
                <Link
                  to="/services"
                  className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-5 relative inline-block">
            Contact
            <span className="absolute left-0 -bottom-2 w-8 h-[2px] bg-indigo-600"></span>
          </h4>

          <p className="text-sm text-gray-400">
            📧 info@ilitecode.com
          </p>
          <p className="text-sm text-gray-400 mt-3">
            📍 Pune, Maharashtra, India
          </p>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-gray-800 text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} LiteCode. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
