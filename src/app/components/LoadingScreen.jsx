"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#022333] text-white"
    >
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-t-[#ffc045] border-[#0a91ab] rounded-full animate-spin mb-6" />

      {/* Text */}
      <h2 className="text-2xl font-bold tracking-widest font-mokoto">
        LOADING<span className="text-[#ffc045]">...</span>
      </h2>
      <p className="text-gray-400 text-sm mt-2 font-mono">
        Please wait while we prepare the experience
      </p>
    </motion.div>
  );
}
