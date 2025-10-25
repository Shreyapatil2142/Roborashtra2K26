"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface FloatingParticlesProps {
  count: number;
  color: string;
  size?: number; // in px
  className?: string;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ count, color, size = 2, className = "" }) => {
  const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);

  useEffect(() => {
    // Generate random positions only on client
    const posArray = Array.from({ length: count }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setPositions(posArray);
  }, [count]);

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${className}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            top: `${pos.top}%`,
            left: `${pos.left}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;
