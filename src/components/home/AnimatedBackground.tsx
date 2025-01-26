"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Define the Circle type
type Circle = {
  width: number;
  height: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
};

const AnimatedBackground = () => {
  // Type the circles state with the Circle type
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const newCircles = [...Array(20)].map(() => ({
      width: Math.random() * 4 + 1,
      height: Math.random() * 4 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setCircles(newCircles);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"
        animate={{
          background: [
            "linear-gradient(to bottom right, #111827, #374151)",
            "linear-gradient(to bottom right, #374151, #6f7782)",
            "linear-gradient(to bottom right, #6f7782, #46505b)",
            "linear-gradient(to bottom right, #46505b, #111827)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: circle.width,
            height: circle.height,
            top: circle.top,
            left: circle.left,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            delay: circle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
