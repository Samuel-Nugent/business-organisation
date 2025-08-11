import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CurrencyDollarIcon,
  MegaphoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const BusinessSolutions = () => {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <motion.section
        className="text-center py-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-normal text-start">Business Solutions</h1>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          Our Solutions provide tailored business services that help
          organizations operate efficiently, manage teams, promote growth, and
          stay compliant. Our experts ensure your back-office is as powerful as
          your tech stack.
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
            <CurrencyDollarIcon className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <Link
                to="/business-solutions/accounting"
                className="text-indigo-600 hover:underline font-medium"
              >
                Accounting &amp; Bookkeeping
              </Link>
              <p className="mt-1">
                Streamlined financial reporting, payroll services, and
                bookkeeping to keep your business financially sound and audit
                ready.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <MegaphoneIcon className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <Link
                to="/business-solutions/marketing"
                className="text-indigo-600 hover:underline font-medium"
              >
                Marketing &amp; Brand Strategy
              </Link>
              <p className="mt-1">
                From digital campaigns to content strategy, we help businesses
                grow their reach and communicate clearly with their audience.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <UserGroupIcon className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <Link
                to="/business-solutions/human-resources"
                className="text-indigo-600 hover:underline font-medium"
              >
                Human Resources
              </Link>
              <p className="mt-1">
                End-to-end HR support including recruitment, compliance, and
                team management to help you build and retain top talent.
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
        <h2 className="text-3xl font-normal">
          Ready to Streamline Your Business?
        </h2>
        <p className="mb-6 text-gray-700 max-w-xl mx-auto mt-4">
          Let us handle your business operations while you focus on growth.
          Connect with our team today.
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

export default BusinessSolutions;
