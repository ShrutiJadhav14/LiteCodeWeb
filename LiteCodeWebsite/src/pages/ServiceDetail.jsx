import { useParams } from "react-router-dom";
import { services } from "../data/servicesData"; 
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
      </div>
    );
  }
   const Icon = service.icon;


  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-20">

        {/* HERO */}
 
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="relative max-w-3xl"
>
  {/* Glow */}
  <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full" />

   <Icon size={60} className="text-indigo-600 mb-6 relative z-10" />

  <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
    {service.title}
  </h1>

  <p className="text-lg text-gray-600 leading-relaxed">
    {service.intro}
  </p>
</motion.div>
 

        {/* OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-600 rounded-full" />
                Overview
                </h2>

          <p className="text-gray-600 leading-relaxed">
            {service.overview}
          </p>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-8 h-1 bg-indigo-600 rounded-full" />
        Key Features
        </h2>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((item, i) => (
              <li
                key={i}
                className="bg-white rounded-xl p-4 shadow-sm text-gray-700"
              >
                ✓ {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* PROCESS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-8 h-1 bg-indigo-600 rounded-full" />
        Our Process
        </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.process.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 text-center shadow-sm"
              >
                <div className="text-indigo-600 font-bold mb-2">
                  Step {i + 1}
                </div>
                <p className="text-sm text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-8 h-1 bg-indigo-600 rounded-full" />
        Technology Stack
        </h2>

          <div className="flex flex-wrap gap-3">
            {service.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* USE CASES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-8 h-1 bg-indigo-600 rounded-full" />
         Use Cases
        </h2>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.useCases.map((useCase, i) => (
              <li
                key={i}
                className="bg-white rounded-xl p-4 shadow-sm text-gray-700"
              >
                {useCase}
              </li>
            ))}
          </ul>
        </motion.div>


      </div>
    </section>
  );
};

export default ServiceDetail;
