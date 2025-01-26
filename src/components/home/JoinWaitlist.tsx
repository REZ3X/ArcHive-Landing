"use client";

import { motion } from "framer-motion";

const JoinWaitlist = ({ mounted, fadeIn }) => {
  return (
    <section className="text-center space-y-6">
      <motion.h2
        className="text-3xl font-semibold"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 2 }}
      >
        Join the Waitlist
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-gray-300"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 2.2 }}
      >
        Be the first to experience ArcHive when we launch. Sign up for our waitlist and stay updated on our progress.
      </motion.p>
      <motion.button
        className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center justify-center mx-auto hover:bg-yellow-300 transition-colors duration-300"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 2.4 }}
      >
        Sign Up Now
      </motion.button>
    </section>
  );
};

export default JoinWaitlist;