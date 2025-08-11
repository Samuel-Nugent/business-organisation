import React from "react";
import { motion } from "framer-motion";
import { MegaphoneIcon } from "@heroicons/react/24/outline";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Marketing = () => {
  const services = [
    {
      title: "Digital Advertising",
      description:
        "Google, Meta, LinkedIn campaigns tailored for your audience.",
    },
    {
      title: "Brand Identity & Voice Development",
      description:
        "Craft a compelling brand story and unique voice to resonate.",
    },
    {
      title: "SEO and Content Strategy",
      description:
        "Improve your search rankings and attract the right customers.",
    },
    {
      title: "Social Media Campaigns",
      description:
        "Engage your community with impactful social media presence.",
    },
    {
      title: "Email Marketing and Automation",
      description:
        "Drive conversions with targeted emails and automated workflows.",
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
        <MegaphoneIcon
          className="w-12 h-12 mx-auto text-indigo-600 mb-4"
          aria-hidden="true"
        />
        <h1 className="text-4xl font-normal mb-4">
          We help your business stand out with digital campaigns, brand
          storytelling, and strategic growth initiatives that convert.
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Partner with us for measurable results and a strategy built around
          your unique goals.
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
          Our Marketing Services
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
          Reach out today to build a custom marketing plan.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Talk to Marketing
        </a>
      </motion.section>
    </main>
  );
};

export default Marketing;
