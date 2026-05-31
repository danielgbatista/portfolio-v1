import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hospitalsantamonica.com.br",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**",
      },
      {
        protocol: "https",
        hostname: "freeimage.host",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "iili.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
