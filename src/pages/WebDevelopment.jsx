import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WebDevelopment = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <motion.section
        className="text-center py-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <CodeBracketIcon
          className="w-12 h-12 mx-auto text-indigo-600 mb-4"
          aria-hidden="true"
        />
        <h1 className="text-4xl font-normal mb-4">Web Development</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We build fast, scalable, and modern websites and web applications
          tailored to your business needs. From responsive design to complex
          backend systems, our full-stack expertise covers it all.
        </p>
      </motion.section>

      <motion.section
        className="py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-normal mb-8 text-center">
          Our Web Development Services
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Responsive Web Design",
              description:
                "Crafting visually stunning websites that work seamlessly across all devices and screen sizes.",
            },
            {
              title: "Single Page Applications",
              description:
                "Building fast, interactive SPAs using React, Vue, or Angular for smooth user experiences.",
            },
            {
              title: "Backend Development",
              description:
                "Developing robust and scalable backend systems using Node.js, Express, Django, or other modern frameworks.",
            },
            {
              title: "E-commerce Solutions",
              description:
                "Custom online stores and integrations with payment gateways for smooth shopping experiences.",
            },
            {
              title: "Progressive Web Apps",
              description:
                "Building PWAs that offer offline capabilities and native-like performance across devices.",
            },
            {
              title: "Website Maintenance",
              description:
                "Ensuring your website runs smoothly with updates, security patches, and performance tuning.",
            },
          ].map(({ title, description }) => (
            <li
              key={title}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-normal mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        className="text-center mt-12 bg-gray-100 py-8 rounded-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="mb-4 text-gray-700 text-xl max-w-xl mx-auto">
          Contact our expert web development team today and let’s create
          something amazing together.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Contact Us
        </a>
      </motion.section>
    </main>
  );
};

export default WebDevelopment;
