import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.roborashtra.com", 
      },
      
    ],
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
