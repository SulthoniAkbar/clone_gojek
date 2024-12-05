import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn-site.gojek.com"],
  },
};

export default nextConfig;
