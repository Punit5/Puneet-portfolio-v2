import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Puneet Dimri - Senior Software Developer",
  description: "Senior Software Developer with 8+ years of experience in Java, Spring Boot, AWS, and cloud migration. Specialized in backend development and scalable architecture.",
  keywords: ["Puneet Dimri", "Software Developer", "Java", "Spring Boot", "AWS", "Cloud Migration", "Backend Developer", "Full Stack Developer"],
  authors: [{ name: "Puneet Dimri" }],
  creator: "Puneet Dimri",
  metadataBase: new URL("https://puneetdimri.dev"),
  openGraph: {
    title: "Puneet Dimri - Senior Software Developer",
    description: "Senior Software Developer with 8+ years of experience in Java, Spring Boot, AWS, and cloud migration.",
    type: "website",
    locale: "en_US",
    siteName: "Puneet Dimri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puneet Dimri - Senior Software Developer",
    description: "Senior Software Developer with 8+ years of experience in Java, Spring Boot, AWS, and cloud migration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
