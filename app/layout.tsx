import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-display",
// });

export const metadata: Metadata = {
  title: "Surya Yusuf Nugroho - ML Engineer Portfolio",
  description: "Machine Learning Engineer utilizing deep learning and MLOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
