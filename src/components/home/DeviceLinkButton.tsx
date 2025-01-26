// DeviceLinkButton.tsx
import { Globe, Monitor, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DeviceLinkButton = () => {
  return (
    <section className="flex justify-center space-x-4">
      {[{ title: "Web", icon: <Globe className="w-4 h-4" />, url: "/web" },
        { title: "Desktop", icon: <Monitor className="w-4 h-4" />, url: "/desktop" },
        { title: "Mobile", icon: <Smartphone className="w-4 h-4" />, url: "/mobile" }].map((item, index) => (
        <motion.div 
          key={item.title}
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.2 * (index + 3) }}
        >
          <Link href={item.url} legacyBehavior>
            <a className="inline-flex items-center px-4 py-2 bg-gray-800 text-sm font-medium text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
              {item.icon}
              <span className="ml-2">{item.title}</span>
              <span className="ml-2 text-yellow-400">Coming Soon</span>
            </a>
          </Link>
        </motion.div>
      ))}
    </section>
  );
};

export default DeviceLinkButton;
