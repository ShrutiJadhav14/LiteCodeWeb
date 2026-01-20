import React from "react";
import ServiceCard from "../components/ServiceCard";
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

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "High-performance, responsive websites and web applications using React, Next.js and modern full-stack technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with seamless UX for Android and iOS powered by the latest frameworks.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud architecture, CI/CD pipelines, containerization and scalable infrastructure for business continuity.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Intelligent systems, automation, predictive analytics, and personalized AI solutions that drive insights.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Comprehensive security audits, data protection, authentication, and compliance services.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Robust backend solutions and secure API integrations tailored to your enterprise needs.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "User-centered interface design that balances aesthetics and performance to increase engagement.",
  },
  {
    icon: Settings,
    title: "Custom Software Solutions",
    description:
      "Bespoke software that scales with your business model and operational goals.",
  },
];

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
