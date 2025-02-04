import { Globe, Monitor, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion'; // Import Variants

// Define types for the props
interface DeviceLinkButtonProps {
  mounted: boolean;
  fadeIn: Variants; // Change this to Variants
}

const DeviceLinkButton: React.FC<DeviceLinkButtonProps> = ({ mounted, fadeIn }) => {
  return (
    <section className="text-center space-y-6">
      <motion.h2
        className="text-3xl font-semibold"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Write Your Creativity Anywhere
      </motion.h2>
      <div className="flex justify-center space-x-6 max-425:space-x-2 flex-wrap max-425:align-center max-425:items-center max-425:gap-8">
        {[{ title: "Website", icon: <Globe className="w-8 h-8" />, url: "/comingSoon" },
          { title: "Desktop App", icon: <Monitor className="w-8 h-8" />, url: "/comingSoon" },
          { title: "PWA", icon: <Smartphone className="w-8 h-8" />, url: "/comingSoon" }].map((item, index) => (
          <motion.div 
            key={item.title}
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 3) }}
            className="w-full sm:w-auto"
          >
            <Link href={item.url} legacyBehavior>
              <a className="inline-flex items-center px-6 py-3 max-425:w-[370px]  bg-gray-800 text-lg font-medium text-white rounded-full hover:bg-gray-700 transition-colors duration-300 sm:flex-row">
                {item.icon}
                <span className="ml-3">{item.title}</span>
                <span className="ml-3 text-yellow-400">Coming Soon</span>
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DeviceLinkButton;