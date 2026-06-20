import SiteLayout from "@/components/SiteLayout";
import { TitleProvider } from "@/context/TitleContext";
import "./globals.css";

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
