// src/components/ClientsSection.jsx
import achev from "../assets/images/achev.jpg";
import cntech from "../assets/images/cntech.jpg";
import reliance from "../assets/images/reliance.jpg";

const logos = [achev, cntech, reliance];

const ClientsSection = () => {
  return (
    <section className="py-20">
      <h2 className="text-center text-3xl font-bold mb-10">
        Our Esteemed Clients
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center px-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center grayscale hover:grayscale-0 transition"
          >
            <img src={logo} alt="Client Logo" className="h-12 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
