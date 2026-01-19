// src/components/AboutSection.jsx
import aboutImg from "../assets/images/about.jpg";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-indigo-600">LiteCode</span>
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            We provide cost-effective unified digital solutions that fast-track
            digital transformation, improve operational efficiency, and boost
            business performance.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            With over <strong>12+ years of expertise</strong>, we help businesses
            focus on core competencies while we manage IT and enterprise needs.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From startups to enterprises, we deliver tailor-made software
            solutions built on trust, transparency, and innovation.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About LiteCode"
            className="rounded-2xl shadow-xl max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
