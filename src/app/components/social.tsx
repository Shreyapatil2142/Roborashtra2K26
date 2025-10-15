"use client";
import React from "react";
import { motion } from "framer-motion";

interface SocialMediaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function SocialMediaButton({ children, onClick }: SocialMediaButtonProps) {
  return (
    <motion.div
      className="backdrop-blur-[5px] backdrop-filter size-[50px] bg-[#065471] relative rounded-[12px] cursor-pointer"
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 20px rgba(2, 204, 255, 0.8), 0 0 40px rgba(2, 204, 255, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
      onClick={onClick}
    >
      {/* Border */}
      <motion.div 
        aria-hidden="true" 
        className="absolute border border-[rgba(2,204,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]"
        whileHover={{
          borderColor: "rgba(2,204,255,0.9)",
          boxShadow: "inset 0 0 15px rgba(2,204,255,0.4)"
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Content */}
      <div className="flex items-center justify-center relative size-full">
        {children}
      </div>
      
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-[12px] pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 1,
          background: "radial-gradient(circle, rgba(2,204,255,0.15) 0%, transparent 70%)"
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
