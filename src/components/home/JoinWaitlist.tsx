"use client";

import { useState, FormEvent } from "react"; // Import FormEvent for typing the event
import { motion, Variants } from "framer-motion"; // Import Variants

// Define types for the props
interface JoinWaitlistProps {
  mounted: boolean; // Type for mounted
  fadeIn: Variants; // Type for fadeIn
}

const JoinWaitlist: React.FC<JoinWaitlistProps> = ({ mounted, fadeIn }) => {
  const [email, setEmail] = useState<string>(""); // Specify type for email state
  const [submitted, setSubmitted] = useState<boolean>(false); // Specify type for submitted state

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { // Type the event parameter
    e.preventDefault();
    // Add your form submission logic here
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

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
      {!submitted ? (
        <motion.form
          className="max-w-md mx-auto space-y-4"
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 2.4 }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Join Waitlist
          </button>
        </motion.form>
      ) : (
        <motion.p
          className="max-w-md mx-auto text-green-400"
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          Thank you for joining the waitlist! We'll keep you updated on our progress.
        </motion.p>
      )}
    </section>
  );
};

export default JoinWaitlist;