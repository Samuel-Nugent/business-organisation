import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <main className="max-w-5xl mx-auto p-6">
      <motion.section
        className="text-center py-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-normal mb-4">Contact Us</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Have questions or want to start a project? Reach out to us!
        </p>
        <div className="space-y-2 text-gray-700 text-lg max-w-md mx-auto">
          <p>
            📞 Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-indigo-600 hover:underline"
            >
              +1 (234) 567-890
            </a>
          </p>
          <p>
            📧 Email:{" "}
            <a
              href="mailto:contact@businessorganisation.fake"
              className="text-indigo-600 hover:underline"
            >
              contact@businessorganisation.fake
            </a>
          </p>
        </div>
      </motion.section>

      <motion.section
        className="max-w-xl mx-auto py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 mb-1 font-medium"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 mb-1 font-medium"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 mb-1 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full bg-indigo-600 text-white rounded py-3 font-semibold hover:bg-indigo-700 transition-colors duration-300 ${
              submitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.section>
    </main>
  );
};

export default Contact;
