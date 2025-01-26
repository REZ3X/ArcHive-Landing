import { motion } from "framer-motion";
import { Archive, BookOpen, Cloud, StickyNote } from "lucide-react";
import Link from 'next/link';

// Define types for the props
interface ArcHiveDescriptionProps {
  mounted: boolean;
  fadeIn: {
    hidden: string;
    visible: string;
  };
}

const ArcHiveDescription = ({ mounted, fadeIn }: ArcHiveDescriptionProps) => {
  return (
    <section className="flex flex-col items-center space-y-12 py-12">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 gap-12">
        <motion.div 
          className="flex-shrink-0 text-center md:text-left"
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-9xl font-bold text-yellow-400">ArcHive</h1>
        </motion.div>
        <motion.div 
          className="flex flex-col space-y-6 text-center md:text-left"
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h2 
            className="text-3xl font-semibold"
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Your Dynamic Hub for Ideas and Stories
          </motion.h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            ArcHive blends the concepts of "Archive" and "Hive," creating a dynamic platform for efficiently storing, managing, and accessing notes. It combines digital archiving with a hive-like system, symbolizing an organized space for collecting, storing, and managing ideas.
          </p>
          <p className="max-w-2xl mx-auto text-gray-300">
            ArcHive offers structured note-taking features and supports creative needs like writing novels or stories. With an intuitive interface, features like CRUD notes, sticky notes, storylines, and cloud-based synchronization, ArcHive is designed to be a valuable tool for managing notes in the digital era.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <div className="flex flex-col items-center">
              <Archive className="w-12 h-12 text-yellow-400" />
              <p className="text-gray-300 mt-2">Digital Archiving</p>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="w-12 h-12 text-yellow-400" />
              <p className="text-gray-300 mt-2">Creative Writing</p>
            </div>
            <div className="flex flex-col items-center">
              <StickyNote className="w-12 h-12 text-yellow-400" />
              <p className="text-gray-300 mt-2">Sticky Notes</p>
            </div>
            <div className="flex flex-col items-center">
              <Cloud className="w-12 h-12 text-yellow-400" />
              <p className="text-gray-300 mt-2">Cloud Sync</p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="flex flex-row gap-5 text-center md:text-left"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link href="/comingSoon" legacyBehavior>
          <a className="justify-center inline-flex items-center px-6 py-3 bg-gray-800 text-lg font-medium text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
           The Team
          </a>
        </Link>
        <Link href="/comingSoon" legacyBehavior>
          <a className="justify-center inline-flex items-center px-6 py-3 bg-gray-800 text-lg font-medium text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
            Roadmap
          </a>
        </Link>
        <Link href="/comingSoon" legacyBehavior>
          <a className="justify-center inline-flex items-center px-6 py-3 bg-gray-800 text-lg font-medium text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
            Infrastructure
          </a>
        </Link>
        <Link href="https://rejaka.me" legacyBehavior>
          <a target="_blank" className="justify-center inline-flex items-center px-6 py-3 bg-gray-800 text-lg font-medium text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
            Dev's Site
          </a>
        </Link>
        <Link href="/donate" legacyBehavior>
          <a className="justify-center inline-flex items-center px-6 py-3 bg-gray-800 text-lg font-medium text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
            Donate
          </a>
        </Link>
      </motion.div>
    </section>
  );
};

export default ArcHiveDescription;
