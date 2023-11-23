import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Marco Pollacci",
  description: "Marco Pollacci's personal website",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <head>
        <noscript>Plese activate Javascript</noscript>
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
