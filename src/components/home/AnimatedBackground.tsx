"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Circle = {
  width: number;
  height: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
};

const AnimatedBackground = () => {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const newCircles = Array.from({ length: 10 }).map(() => ({
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 2,
      delay: Math.random() * 5,
    }));
    setCircles(newCircles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute bg-yellow-400 rounded-full"
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