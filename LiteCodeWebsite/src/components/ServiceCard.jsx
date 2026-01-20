import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, slug }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition h-full flex flex-col">
      <div className="mb-4 text-indigo-600">
        <Icon size={36} />
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-gray-600 text-sm flex-grow">
        {description}
      </p>

      <button
        onClick={() => navigate(`/services/${slug}`)}
        className="mt-4 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition"
      >
        Learn More <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default ServiceCard;
