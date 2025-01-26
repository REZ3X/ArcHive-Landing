"use client";

import { motion } from "framer-motion";
import { Edit3, Cloud, Book, Layers, Lock, Star } from "lucide-react";

const FeaturesSection = ({ mounted, fadeIn }) => {
  const features = [
    { title: "Intuitive Interface", description: "Easy-to-use platform for managing your notes and ideas.", icon: <Edit3 className="w-6 h-6" /> },
    { title: "Cloud Synchronization", description: "Access your notes from anywhere, anytime.", icon: <Cloud className="w-6 h-6" /> },
    { title: "Creative Writing Support", description: "Perfect for writing novels and stories.", icon: <Book className="w-6 h-6" /> },
    { title: "Flexible Organization", description: "Customize how you store and categorize your information.", icon: <Layers className="w-6 h-6" /> },
    { title: "Secure Authentication", description: "Keep your ideas safe with robust security measures.", icon: <Lock className="w-6 h-6" /> },
    { title: "Premium Account", description: "Unlock exclusive features for power users.", icon: <Star className="w-6 h-6" /> },
  ];

  return (
    <section className="space-y-12 flex items-center flex-col py-12">
      <motion.h2
        className="text-3xl font-semibold text-center"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Features
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg w-full h-28" // Card styling with fixed height
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 * (index + 8) }}
            >
              <div className="bg-yellow-400 p-2 rounded-full text-gray-900">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg w-full h-28" // Card styling with fixed height
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 * (index + 11) }}
            >
              <div className="bg-yellow-400 p-2 rounded-full text-gray-900">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;