import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kiersten-hr",
  images: { unoptimized: true },
};

export default nextConfig;
