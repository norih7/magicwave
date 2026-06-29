import SiteLayout from "@/components/SiteLayout";
import { TitleProvider } from "@/context/TitleContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "RE:MAGIC ",
    template: "%s | RE:MAGIC テイルズオブエターニア攻略",
  },
  description:
    "テイルズオブエターニアのストーリー、データ、やり込み要素など攻略情報を公開。リマスター版にも対応予定のクリーンな攻略サイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <TitleProvider>
          <SiteLayout>{children}</SiteLayout>
        </TitleProvider>
      </body>
    </html>
  );
}
