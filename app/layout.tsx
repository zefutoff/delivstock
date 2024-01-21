import "@/styles/globals.css";
// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
