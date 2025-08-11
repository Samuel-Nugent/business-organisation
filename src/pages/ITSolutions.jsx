import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  CpuChipIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const ITSolutions = () => {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <motion.section
        className="text-center py-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-normal text-start">IT Solutions</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          We deliver comprehensive IT services tailored to businesses at every
          stage. From custom software and platform launches to workflow
          automation, our team provides innovative solutions that help you stay
          ahead in a fast-changing digital world.
        </p>
      </motion.section>

      <motion.section
        className="py-10 space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        custom={0.1}
      >
        <ul className="space-y-6 text-gray-700">
          <li className="flex items-start gap-4">
            <GlobeAltIcon className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <Link
                to="/it-solutions/web-development"
                className="text-indigo-600 hover:underline font-medium"
              >
                Web Development
              </Link>
              <p className="mt-1">
                Full-stack web solutions including responsive design, API
                integrations, single-page applications, and ongoing maintenance
                to maximize performance.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <CubeIcon className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <Link
                to="/it-solutions/blockchain"
                className="text-indigo-600 hover:underline font-medium"
              >
                Blockchain Services
              </Link>
              <p className="mt-1">
                Secure decentralized platforms, smart contracts, tokenization,
                and expert consulting to help you leverage blockchain technology
                effectively.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <CpuChipIcon className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <Link
                to="/it-solutions/ai"
                className="text-indigo-600 hover:underline font-medium"
              >
                AI Solutions
              </Link>
              <p className="mt-1">
                Advanced AI-powered tools to automate workflows, extract
                insights, and build intelligent applications tailored to your
                business needs.
              </p>
            </div>
          </li>
        </ul>
      </motion.section>

      <motion.section
        className="text-center py-12 bg-gray-100 rounded-lg mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0.2}
      >
        <h2 className="text-3xl font-normal">Ready to Innovate with IT?</h2>
        <p className="mb-6 text-gray-700 max-w-xl mx-auto mt-4">
          Whether you’re looking to build a new platform, optimize your systems,
          or explore emerging technologies, our experts are here to help you
          succeed.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Contact Us
        </Link>
      </motion.section>
    </main>
  );
};

export default ITSolutions;
