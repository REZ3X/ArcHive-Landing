"use client";

import { motion } from "framer-motion";
import styles from "../../styles/Header.module.css"; // Import the CSS module
import { ChevronDown } from "lucide-react"; // Import a more elegant arrow icon

const Header = ({ mounted, fadeIn }) => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const arrowVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: [0, 10, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.h1
        className="text-6xl font-bold text-center text-white relative z-10"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 0.5 }}
      >
        Welcome to <span className="text-yellow-400">ArcHive Notes</span>
      </motion.h1>
      <div className={`relative z-10 text-4xl text-yellow-400 mt-4 ${styles.comingSoon}`}>
        Coming Soon
      </div>
      <motion.div
        className="absolute bottom-10 text-white text-4xl"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={arrowVariants}
      >
        <a href="#about" className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
          <ChevronDown className="w-8 h-8 text-white" />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;