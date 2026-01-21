// src/pages/Contact.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
import WhatsAppFloat from "../components/WhatsAppFloat";

const Contact = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const job = params.get("job");

    if (job) {
      setMessage(`Hi, I want to apply for ${job} position.`);
    }
  }, [location.search]);

  return (
    <main className="pt-24">
      <ContactForm message={message} setMessage={setMessage} />
      <ContactMap />
      <WhatsAppFloat />
    </main>
  );
};

export default Contact;
