import React from "react";
import { motion } from "framer-motion";
import { CpuChipIcon } from "@heroicons/react/24/outline";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AI = () => {
  const services = [
    {
      title: "Machine Learning Models",
      description:
        "Custom-built ML models trained on your data to solve specific business problems such as classification, prediction, and clustering.",
    },
    {
      title: "AI-Powered Automation",
      description:
        "Streamline your workflows using intelligent process automation (IPA) — reduce manual work and improve accuracy.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Build chatbots, sentiment analysis tools, and document summarizers with state-of-the-art NLP frameworks.",
    },
    {
      title: "Computer Vision",
      description:
        "Integrate image and video analysis capabilities into your applications, including object detection, facial recognition, and more.",
    },
    {
      title: "Predictive Analytics",
      description:
        "Use historical data to forecast trends, customer behavior, and operational outcomes with precision.",
    },
    {
      title: "Custom AI Strategy & Consulting",
      description:
        "Not sure where to begin? We help businesses define, scope, and deploy AI strategies aligned with their goals.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto p-6">
      <motion.section
        className="text-center py-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <CpuChipIcon
          className="w-12 h-12 mx-auto text-indigo-600 mb-4"
          aria-hidden="true"
        />
        <h1 className="text-4xl font-normal mb-4">AI Solutions</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We leverage cutting-edge artificial intelligence to transform how
          businesses operate. From intelligent automation to predictive
          analytics, our AI services empower organizations to work smarter,
          faster, and more efficiently.
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
          Our AI Services
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map(({ title, description }) => (
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
          Contact our AI specialists to discuss how we can tailor a solution to
          your needs.
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

export default AI;
