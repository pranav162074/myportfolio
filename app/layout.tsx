import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Pranav Reddy | Portfolio",
  description: "Portfolio of Sai Pranav Reddy - IT Undergraduate & Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}