import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nextjs-portfolio',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true
};

export default nextConfig;
