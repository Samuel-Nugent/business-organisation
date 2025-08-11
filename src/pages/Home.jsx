import BackgroundSlider from "@/components/BackgroundSlider";
import { CarouselPlugin } from "@/components/CarouselPlugin";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto py-4 px-6 md:px-20 lg:px-32 text-blue-600"
      >
        <BackgroundSlider />

        <div className="space-x-6 mt-16 text-center">
          <a
            href="/about"
            className="border border-blue-450 hover:text-blue-300 hover:bg-blue-950 px-8 py-3 rounded"
          >
            About us
          </a>
          <a
            href="/contact"
            className="border border-blue-450 hover:text-blue-300 hover:bg-blue-950 px-8 py-3 rounded"
          >
            Contact Us
          </a>
        </div>

        <div>
          <main className="p-8">
            <h2 className="text-2xl font-bold mb-6">
              What our clients have said
            </h2>
            <CarouselPlugin />
          </main>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
