import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn2.craftum.com" },
      { protocol: "https", hostname: "274418.selcdn.ru" },
      { protocol: "https", hostname: "static.craftum.com" },
    ],
  },
};

export default nextConfig;
