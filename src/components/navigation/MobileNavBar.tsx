import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !(event.target as HTMLElement).closest(".mobile-nav") &&
        !(event.target as HTMLElement).closest(".menu-button")
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="desktop:hidden bg-gray-900 text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50 max-425:flex">
      <div className="text-2xl font-bold text-yellow-400">ArcHive</div>
      <button
        onClick={toggleNav}
        className="menu-button text-gray-400 hover:text-white transition-colors duration-300 z-50"
      >
        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav fixed top-16 right-0 h-full w-64 bg-gray-900 text-white flex flex-col items-center space-y-4 py-4 z-40"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={closeNav}
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={closeNav}
            >
              Features
            </a>
            <a
              href="#future"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={closeNav}
            >
              Future
            </a>
            <a
              href="#create"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={closeNav}
            >
              Create
            </a>
            <Link href="/patch" legacyBehavior>
              <a className="w-28 text-center text-black bg-[#fbcc16] px-2 py-1 rounded-lg hover:bg-[#b4920f] transition-colors duration-300">
                Patch Notes
              </a>
            </Link>
            <Link href="https://alpha-dev.archivenotes.site" legacyBehavior>
          <a className="w-28 text-center text-black bg-[#fbcc16] px-2 py-1 rounded-lg hover:bg-[#b4920f] transition-colors duration-300">
            Beta
          </a>
        </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavBar;
