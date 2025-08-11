import React from "react";
import { motion } from "framer-motion";
import { CubeIcon } from "@heroicons/react/24/outline";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Blockchain = () => {
  const services = [
    {
      title: "Smart Contract Development",
      description:
        "We design and deploy smart contracts on Ethereum, Binance Smart Chain, and other platforms, ensuring security and efficiency.",
    },
    {
      title: "Blockchain Consulting",
      description:
        "Not sure where to start? Our experts provide strategic guidance and feasibility analysis for your blockchain project.",
    },
    {
      title: "Custom dApp Development",
      description:
        "From DeFi to NFTs, we build decentralized applications tailored to your business needs using modern frameworks.",
    },
    {
      title: "Private Blockchain Solutions",
      description:
        "We create permissioned blockchain networks for businesses requiring more control and data privacy.",
    },
    {
      title: "Token Development",
      description:
        "Launch your own cryptocurrency or utility token with industry-standard protocols like ERC-20, BEP-20, and more.",
    },
    {
      title: "Blockchain Audits",
      description:
        "Security is critical. We audit smart contracts and blockchain systems to identify vulnerabilities before deployment.",
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
        <CubeIcon
          className="w-12 h-12 mx-auto text-indigo-600 mb-4"
          aria-hidden="true"
        />
        <h1 className="text-4xl font-normal mb-4">
          Building the Future with Blockchain
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Secure. Transparent. Decentralized. Let us help you harness the power
          of blockchain technology.
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
          Our Blockchain Services
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
        className="text-center mt-12 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <blockquote className="border-l-4 border-indigo-600 pl-6 italic text-gray-700 mb-6">
          <p>
            "They helped us launch our DeFi platform from the ground up. Their
            team is knowledgeable, responsive, and reliable."
          </p>
          <footer className="mt-2">— Jane Doe, CTO</footer>
        </blockquote>
      </motion.section>

      <motion.section
        className="text-center mt-8 bg-gray-100 py-8 rounded-lg max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="mb-4 text-gray-700 text-xl max-w-xl mx-auto">
          Contact our blockchain experts today and let's build the future
          together.
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

export default Blockchain;
