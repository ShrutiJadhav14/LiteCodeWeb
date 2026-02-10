import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = ({ message, setMessage }) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const jobRole = params.get("job") || "";

  const isCareer = !!jobRole;

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateId = isCareer
      ? import.meta.env.VITE_TEMPLATE_ID1
      : import.meta.env.VITE_TEMPLATE_ID;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        templateId,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();
      setMessage("");
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto px-6">

        {/* HEADER */}
        <motion.div className="text-center mb-14">
          <span className="inline-block px-5 py-1.5 mb-4 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
            {isCareer ? "Career Application" : "Contact Us"}
          </span>

          <h1 className="text-4xl font-extrabold text-gray-900">
            {isCareer ? "Apply for This Role" : "Let’s Build Something Great"}
          </h1>

          {isCareer && (
            <p className="mt-3 text-gray-600">
              Applying for: <b>{jobRole}</b>
            </p>
          )}
        </motion.div>

        {/* FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white rounded-3xl shadow-xl p-10 grid gap-6"
        >
          {/* JOB ROLE — EmailJS SAFE */}
          {isCareer && (
            <>
              <input
                type="text"
                value={jobRole}
                readOnly
                className="input-modern bg-gray-100 font-semibold"
              />
              <input
                type="hidden"
                name="job_role"
                defaultValue={jobRole}
              />
            </>
          )}

          <input
            name="name"
            required
            placeholder="Full Name"
            className="input-modern"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="input-modern"
          />

          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            className="input-modern"
          />

          <textarea
            name="message"
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            className="input-modern resize-none"
          />

          <input
            type="hidden"
            name="source"
            value={isCareer ? "Career Application" : "Contact Form"}
          />

          {status === "success" && (
            <p className="text-green-600 text-sm">✅ Message sent successfully.</p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-sm">❌ Failed to send message.</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg"
          >
            {loading ? "Sending..." : "Submit 🚀"}
          </button>
        </motion.form>
      </div>

      <style>{`
        .input-modern {
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          outline: none;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
