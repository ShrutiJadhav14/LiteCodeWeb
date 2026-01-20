import React from "react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl p-6 flex flex-col h-full">
      <div className="text-indigo-600 mb-4">
        <Icon size={36} className="opacity-90" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-1">{description}</p>
      <div className="mt-4">
       <button className="text-indigo-600 font-semibold hover:underline hover:scale-105 transition-transform">
        Learn More →
        </button>

      </div>
    </div>
  );
};

export default ServiceCard;
