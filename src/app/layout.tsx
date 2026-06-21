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
      <meta
        name="google-site-verification"
        content="hx_S7uPi-OA7S1_BaL0QVcljWmU983y96p2Qfs8pVRs"
      />
      <body>
        <TitleProvider>
          <SiteLayout>{children}</SiteLayout>
        </TitleProvider>
      </body>
    </html>
  );
}
