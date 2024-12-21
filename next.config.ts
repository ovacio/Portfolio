import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH_PRODUCTION : '',
  output: isProd ? 'export' : undefined,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true
};

export default nextConfig;
