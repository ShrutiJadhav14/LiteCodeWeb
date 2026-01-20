// src/components/AboutSection.jsx
import { motion } from "framer-motion";
import aboutImg from "../assets/images/about.jpg";

const AboutSection = () => {
  /* Motion variants */
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -3 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } },
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text Content */}
          <motion.div className="space-y-6" variants={item}>
            <motion.span
              className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700"
              variants={highlightVariants}
            >
              About Us
            </motion.span>

            <motion.h1
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
              variants={item}
            >
              Building Digital Excellence at{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                LiteCode
              </span>
            </motion.h1>

            <motion.p className="text-lg text-gray-600 leading-relaxed" variants={item}>
              We deliver cost-effective, unified digital solutions that accelerate
              transformation, improve efficiency, and unlock sustainable business growth.
            </motion.p>

            <motion.p className="text-gray-600 leading-relaxed" variants={item}>
              With over <strong className="text-gray-900">12+ years of expertise</strong>,
              our team enables businesses to stay focused on what matters most—while we
              take care of technology, innovation, and scale.
            </motion.p>

            {/* Highlights */}
            <motion.div className="flex flex-wrap gap-4 pt-4" variants={item}>
              {[
                "Enterprise Solutions",
                "Startup Friendly",
                "Secure & Scalable",
                "Customer-Centric",
              ].map((item, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-700 cursor-default hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300"
                  variants={highlightVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  ✓ {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Card */}
          <motion.div className="relative" variants={imageVariants}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl rotate-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="relative bg-white rounded-3xl p-2 shadow-2xl hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={aboutImg}
                alt="About LiteCode"
                className="rounded-2xl object-cover w-full h-[420px] shadow-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
