import { motion } from "framer-motion";
import { Users, Palette, Calendar, Keyboard } from "lucide-react";

const PlannedFeature = () => {
  const features = [
    {
      title: "Community",
      description: "Connect with other writers and thinkers.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Theme Customization",
      description: "Personalize your writing environment.",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      title: "Tasks and Schedule Creation",
      description: "Organize your writing process and set goals.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Typing Training",
      description: "Improve your typing speed and accuracy.",
      icon: <Keyboard className="w-6 h-6" />,
    },
  ];

  return (
    <section className="space-y-12 flex flex-col items-center py-12">
      <motion.h2
        className="text-3xl font-semibold text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        Planned Features
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg w-full h-28 max-375:h-24"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 14) }}
            >
              <div className="bg-blue-400 p-2 rounded-full text-gray-900">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold max-375:text-md">
                  {feature.title}
                </h3>
                <p className="text-gray-300 max-375:text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          {features.slice(2).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg w-full h-28 max-375:h-24"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 16) }}
            >
              <div className="bg-blue-400 p-2 rounded-full text-gray-900">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold max-375:text-md">
                  {feature.title}
                </h3>
                <p className="text-gray-300 max-375:text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlannedFeature;
