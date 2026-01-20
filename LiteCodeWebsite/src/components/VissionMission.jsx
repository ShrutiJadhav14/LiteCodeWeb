// src/components/VisionMission.jsx
import { motion } from "framer-motion";
import visionImg from "../assets/images/vission.jpg";

const VisionMission = () => {
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
    hidden: { opacity: 0, scale: 0.9, rotate: 3 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } },
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden py-24 bg-gray-50">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Section (LEFT) */}
          <motion.div className="relative" variants={imageVariants}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl -rotate-3"
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
                src={visionImg}
                alt="Vision and Mission"
                className="rounded-2xl object-cover w-full h-[420px] shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Text Section (RIGHT) */}
          <motion.div className="space-y-8" variants={item}>
            <motion.span
              className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700"
              variants={highlightVariants}
            >
              Vision & Mission
            </motion.span>

            <motion.div variants={item}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a beacon of innovation, empowering businesses globally
                through transformative and future-ready software solutions.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We strive to revolutionize the digital landscape by delivering
                cutting-edge, customer-centric software solutions that drive
                growth, enhance efficiency, and enable long-term success.
              </p>
            </motion.div>

            {/* Value highlights */}
            <motion.div className="flex flex-wrap gap-4 pt-4" variants={item}>
              {[
                "Innovation Driven",
                "Global Impact",
                "Scalable Solutions",
                "Trusted Partnerships",
              ].map((item, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 text-sm rounded-lg bg-white shadow text-gray-700 cursor-default hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300"
                  variants={highlightVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  ✓ {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
