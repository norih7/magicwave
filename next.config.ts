import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',       // 静的エクスポート
  images: {
    unoptimized: true,    // Cloudflare Pages用
  },
};

export default nextConfig;