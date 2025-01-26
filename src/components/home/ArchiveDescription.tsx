// ArcHiveDescription.tsx
import { motion } from 'framer-motion';

const ArcHiveDescription = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="text-center space-y-6">
      <motion.h2 
        className="text-3xl font-semibold"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Your Dynamic Hub for Ideas and Stories
      </motion.h2>
      <motion.p 
        className="max-w-2xl mx-auto text-gray-300"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        ArcHive is an innovative web platform combining digital archiving with the dynamics of a beehive, 
        creating an organized space for collecting, storing, and managing ideas efficiently.
      </motion.p>
    </section>
  );
};

export default ArcHiveDescription;
