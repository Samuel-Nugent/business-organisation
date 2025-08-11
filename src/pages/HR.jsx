import React from "react";
import { motion } from "framer-motion";
import { UserGroupIcon } from "@heroicons/react/24/outline";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HumanResources = () => {
  const services = [
    {
      title: "Talent Acquisition & Onboarding",
      description:
        "Attract, hire, and smoothly onboard the right talent to set your teams up for success.",
    },
    {
      title: "HR Policy Development",
      description:
        "Create clear, compliant HR policies that align with your company culture and legal requirements.",
    },
    {
      title: "Benefits & Compliance Management",
      description:
        "Manage employee benefits and stay up to date with labor laws and regulatory compliance.",
    },
    {
      title: "Performance & Engagement Tracking",
      description:
        "Implement tools and processes to monitor employee performance and boost engagement.",
    },
    {
      title: "Conflict Resolution & Team Support",
      description:
        "Foster a positive workplace by addressing conflicts promptly and supporting team cohesion.",
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
        <UserGroupIcon
          className="w-12 h-12 mx-auto text-indigo-600 mb-4"
          aria-hidden="true"
        />
        <h1 className="text-4xl font-normal mb-4">Human Resources Solutions</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Build a people-first culture with strategic HR solutions — from
          onboarding to compliance to employee engagement.
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
          Our HR Services
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
          Let us help you nurture and grow your people-first culture.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Connect with HR
        </a>
      </motion.section>
    </main>
  );
};

export default HumanResources;
