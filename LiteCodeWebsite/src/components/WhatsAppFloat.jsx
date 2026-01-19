// src/components/WhatsAppFloat.jsx
import whatsapp from "../assets/images/wp.jpg";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/918127288127"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <img
        src={whatsapp}
        alt="WhatsApp"
        className="w-14 hover:scale-110 transition"
      />
    </a>
  );
};

export default WhatsAppFloat;
