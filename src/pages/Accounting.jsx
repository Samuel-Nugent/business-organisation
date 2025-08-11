import React from "react";
import { motion } from "framer-motion";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Accounting = () => {
  const services = [
    {
      title: "Bookkeeping & Financial Reconciliation",
      description:
        "Accurately track and reconcile your financial transactions to keep your books clean and up to date.",
    },
    {
      title: "Payroll Management",
      description:
        "Manage employee salaries, taxes, and compliance with streamlined payroll solutions.",
    },
    {
      title: "Tax Preparation & Reporting",
      description:
        "Ensure timely and accurate tax filings, minimizing liabilities and maximizing compliance.",
    },
    {
      title: "Invoicing and Accounts Receivable",
      description:
        "Simplify billing processes and manage receivables efficiently to improve cash flow.",
    },
    {
      title: "Cash Flow Analysis and Forecasting",
      description:
        "Gain insights into your cash flow trends to make informed financial decisions.",
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
        <CurrencyDollarIcon
          className="w-12 h-12 mx-auto text-indigo-600 mb-4"
          aria-hidden="true"
        />
        <h1 className="text-4xl font-normal mb-4">
          Accurate, efficient, and scalable financial services tailored to your
          business goals.
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We handle the numbers so you can focus on growth.
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
          Our Accounting Services
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
          Contact our expert accounting team today and let’s manage your
          finances with confidence.
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

export default Accounting;
