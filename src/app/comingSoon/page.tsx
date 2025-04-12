"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
const ComingSoon = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-nunito">
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-4">ArcHive</h1>
        <p className="text-2xl mb-8">Your dynamic hub for ideas and stories.</p>
        <div className="flex flex-col items-center space-y-8">
          <div className={`text-4xl text-yellow-400 ${styles.comingSoon}`}>
            Coming Soon
          </div>
          <Link href="/" legacyBehavior>
            <a className="inline-flex items-center px-6 py-3 bg-yellow-400 text-lg font-medium text-gray-900 rounded-full hover:bg-yellow-500 transition-colors duration-300">
              Back to Home
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
