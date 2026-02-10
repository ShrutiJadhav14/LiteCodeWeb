import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/servicesData";
import {
  Code,
  Smartphone,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Server,
  Layers,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { useEffect } from "react";
import { setSEO } from "../utils/seo";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};


const Services = () => {

  useEffect(() => {
      setSEO({
        title: "Our Services | LiteCode",
        description: "Explore LiteCode services including Web, Mobile, AI, Cloud, Cyber Security and more.",
      });
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-indigo-600">Services</span>
          </h2>
          <p className="mt-4 text-gray-600">
            We deliver modern, secure and scalable digital solutions tailored to your business needs. Whether you're a startup or enterprise,
            we help drive growth through technology and innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                slug={service.slug}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
      <WhatsAppFloat />
    </section>
  );
};

export default Services;
