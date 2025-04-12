"use client";

import { motion, Variants } from "framer-motion";
import styles from "../../styles/Header.module.css";
import { ChevronDown } from "lucide-react";
interface HeaderProps {
  mounted: boolean;
  fadeIn: Variants;
}

const Header: React.FC<HeaderProps> = ({ mounted, fadeIn }) => {
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const arrowVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: [0, 10, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="relative h-screen max-425:max-w-[425px] flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.h1
        className="text-6xl max-425:text-3xl font-bold text-center text-white relative z-10"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 0.5 }}
      >
        Welcome to <span className="text-yellow-400">ArcHive Notes</span>
      </motion.h1>
      <div
        className={`relative z-10 text-4xl max-425:text-2xl text-yellow-400 mt-4 ${styles.comingSoon}`}
      >
        v0.6 Beta is Here
      </div>
      <motion.div
        className="absolute bottom-10 text-white text-4xl"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={arrowVariants}
      >
        <a
          href="#about"
          className="flex items-center justify-center w-12 h-12 max-425:w-8 max-425:h-8 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
