import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-display",
  weight: ['400', '500', '600', '700']
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Surya Yusuf Nugroho — ML Engineer & Developer",
  description: "Machine Learning Engineer specializing in Deep Learning, Computer Vision, and MLOps. Building intelligent systems and deploying scalable ML models.",
  keywords: ["Machine Learning", "ML Engineer", "Deep Learning", "Computer Vision", "Portfolio", "Surya Yusuf Nugroho", "Python", "PyTorch", "TensorFlow"],
  authors: [{ name: "Surya Yusuf Nugroho" }],
  creator: "Surya Yusuf Nugroho",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syncode.site",
    siteName: "Syncode — Surya's Portfolio",
    title: "Surya Yusuf Nugroho — ML Engineer & Developer",
    description: "Architecting intelligent systems and deploying scalable machine learning models. Specializing in Deep Learning, Computer Vision, and MLOps.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Surya Yusuf Nugroho — ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Yusuf Nugroho — ML Engineer & Developer",
    description: "Architecting intelligent systems and deploying scalable machine learning models.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://syncode.site"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-bg text-text font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-text`}
      >
        {children}
      </body>
    </html>
  );
}
