import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const About = () => {
  return (
    <div className="space-y-24">
      <motion.section
        id="about"
        className="container mx-auto p-8 md:px-16 lg:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          Organisation Overview
        </h1>
        <p className="text-gray-500 max-w-md mx-auto text-center mb-12">
          Who we are
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-16 lg:gap-20">
          <img
            src={assets.skyline_img}
            alt="City skyline"
            className="w-full max-w-md rounded-xl shadow-md object-cover"
          />
          <div className="mt-10 md:mt-0 text-gray-600 flex flex-col space-y-8 max-w-2xl md:ml-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Our Mission Statement
              </h2>
              <p>
                We are dedicated to crafting tailor-made solutions that meet
                each client's unique goals, ensuring complete satisfaction and
                long-term success. Our approach combines innovation, integrity,
                and a deep understanding of the industries we serve.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Who we are</h2>
              <p>
                With over 11 years of expertise, we have partnered with more
                than 300 organizations, delivering measurable value through
                strategic insight and hands-on execution. Our team blends
                technical proficiency with business acumen to help clients
                navigate complex challenges.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                No job too small or too big
              </h2>
              <p>
                From ambitious startups seeking their first breakthrough to
                established enterprises aiming to innovate at scale, we provide
                flexible, scalable services tailored to every project. Our
                versatility and commitment empower us to take on diverse
                challenges with confidence.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto p-8 md:px-16 lg:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          Shaping Tomorrow’s Solutions
        </h1>
        <p className="text-gray-500 max-w-md mx-auto text-center mb-12">
          Committed to innovation and growth
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-16 lg:gap-20">
          <img
            src={assets.meeting_img}
            alt="Business Meeting"
            className="w-full max-w-md rounded-xl shadow-md object-cover"
          />
          <div className="mt-10 md:mt-0 text-gray-600 max-w-lg md:ml-8">
            <p className="mb-6 leading-relaxed">
              At the core of our philosophy is a relentless pursuit of
              innovation. Our team continuously explores emerging technologies
              and methodologies to develop solutions that are not only
              cutting-edge but also practical and scalable. We believe in
              co-creating value by working closely with our clients,
              understanding their unique challenges, and tailoring strategies
              that align with their vision.
            </p>
            <p className="leading-relaxed">
              Through collaborative partnerships, we empower organizations to
              adapt rapidly to evolving markets, build resilient systems, and
              unlock new growth opportunities. Whether integrating AI,
              optimizing workflows, or redefining customer experiences, our
              forward-thinking approach ensures our clients stay ahead of the
              curve and thrive in a fast-changing world.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto p-8 md:px-16 lg:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          Delivering Impact That Matters
        </h1>
        <p className="text-gray-500 max-w-md mx-auto text-center mb-12">
          Proven results through dedication and expertise
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-16 lg:gap-20">
          <img
            src={assets.review_img}
            alt="Review"
            className="w-full max-w-md rounded-xl shadow-md object-cover"
          />
          <div className="mt-10 md:mt-0 text-gray-600 max-w-2xl md:ml-8 flex flex-col">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full mb-8">
              {[
                { value: "10+", label: "Years of Excellence" },
                { value: "300+", label: "Solutions Delivered" },
                { value: "$150+ Million", label: "Saved for Clients Annually" },
                { value: "30+", label: "Projects Completed Each Year" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-4xl font-medium text-gray-800">
                    {item.value}
                  </p>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <p className="leading-relaxed mb-8">
              We measure our success by the tangible improvements we create for
              clients, ranging from operational efficiencies to revenue growth.
              Our focus remains on delivering actionable results that drive real
              business transformation.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
