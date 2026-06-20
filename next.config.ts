import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

// 💡 Next.jsの設定を関数として定義することで、安全に内部でセットアップを行います
const initConfig = async (): Promise<NextConfig> => {
  // 開発環境（ローカル）のときだけ、Cloudflare（D1など）の接続窓口をセットアップ
  if (process.env.NODE_ENV === "development") {
    await setupDevPlatform();
  }

  return {
    images: {
      unoptimized: true,
    },
    experimental: {},
  };
};

export default initConfig();