import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  output: "standalone", // Helps ensure /pages APIs work correctly
};

export default nextConfig;
