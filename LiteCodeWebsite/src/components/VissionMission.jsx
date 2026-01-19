// src/components/VisionMission.jsx
import visionImg from "../assets/images/vission.jpg";

const VisionMission = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 mb-8">
            To be a beacon of innovation, empowering businesses globally through
            transformative software solutions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We revolutionize the digital landscape by delivering cutting-edge,
            customer-centric software solutions that drive growth, efficiency,
            and long-term success.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={visionImg}
            alt="Vision and Mission"
            className="rounded-2xl shadow-xl max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default VisionMission;
