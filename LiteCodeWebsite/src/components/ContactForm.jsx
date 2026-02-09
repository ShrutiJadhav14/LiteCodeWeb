import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Upload } from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = ({ message, setMessage }) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [resume, setResume] = useState(null);

  const isCareer = message?.toLowerCase().includes("apply");

const sendEmail = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  try {
    let resumeBase64 = "";

    // Convert resume to Base64 if exists
    if (resume) {
      resumeBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(resume);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    }

    await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        name: formRef.current.name.value,
        email: formRef.current.email.value,
        phone: formRef.current.phone.value,
        message: formRef.current.message.value,
        source: isCareer ? "Career Page" : "Contact Page",
        resume_name: resume ? resume.name : "",
        resume_file: resumeBase64 || "",
      },
      import.meta.env.VITE_PUBLIC_KEY
    );

    setStatus("success");
    formRef.current.reset();
    setMessage("");
    setResume(null);
  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatus("error");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-1.5 mb-4 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
            {isCareer ? "Career Application" : "Contact Us"}
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {isCareer ? "Apply for Your Dream Role" : "Let’s Build Something Great"}
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            {isCareer
              ? "Submit your details and resume. Our HR team will reach out."
              : "Tell us about your project and we’ll get back within 24 hours."}
          </p>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* NAME */}
            <input
              name="name"
              required
              placeholder="Full Name"
              className="input-modern"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="input-modern"
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="md:col-span-2 input-modern"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="5"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              className="md:col-span-2 input-modern resize-none"
            />

            {/* RESUME UPLOAD – ONLY FOR CAREER */}
            {isCareer && (
              <div className="md:col-span-2 border-2 border-dashed border-indigo-300 rounded-xl p-6 text-center bg-indigo-50">
                <Upload className="mx-auto text-indigo-600 mb-3" />
                <p className="font-semibold text-gray-700">
                  Upload Your Resume
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  PDF / DOC (Max 2MB)
                </p>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files[0])}
                  className="mx-auto block text-sm"
                />

                {/* hidden input for email */}
                <input
                  type="hidden"
                  name="resume_name"
                  value={resume ? resume.name : ""}
                />
              </div>
            )}

            {/* SOURCE */}
            <input
              type="hidden"
              name="source"
              value={isCareer ? "Career Page" : "Contact Page"}
            />

            {/* STATUS */}
            {status === "success" && (
              <p className="md:col-span-2 text-green-600 text-sm">
                ✅ Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="md:col-span-2 text-red-600 text-sm">
                ❌ Failed to send message.
              </p>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:scale-[1.02] transition disabled:opacity-60"
            >
              {loading
                ? "Sending..."
                : isCareer
                ? "Submit Application 🚀"
                : "Send Message 🚀"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input-modern {
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          outline: none;
          transition: 0.2s;
        }
        .input-modern:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99,102,241,0.15);
          background: white;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
