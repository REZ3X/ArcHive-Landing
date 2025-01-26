"use client";

import { motion } from "framer-motion";

const Header = ({ mounted, fadeIn }) => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.h1
        className="text-6xl font-bold text-center text-white relative z-10"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        Welcome to ArcHive
      </motion.h1>
    </div>
  );
};

export default Header;