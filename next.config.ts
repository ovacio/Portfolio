import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  basePath: isProd ? process.env.BASE_PATH_PRODUCTION : '',
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true
};

export default nextConfig;
