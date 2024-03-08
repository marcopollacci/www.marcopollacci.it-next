import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Image from "next/image";
import me from "../assets/me.jpeg";
import styles from "../styles/Home.module.scss";
import "../styles/globals.scss";
import Cookie from "./_components/cookie";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Marco Pollacci",
  description: "Marco Pollacci's personal website",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  const { COOKIEBOT = "" } = process.env;
  return (
    <html lang="en">
      <head>
        <noscript>Plese activate Javascript</noscript>
      </head>
      <body>
        <div className={styles.container}>
          <main>
            <div className={styles.flexdiv}>
              <div>
                <Image
                  className={styles.me}
                  src={me}
                  loading="eager"
                  alt="me"
                />
              </div>
              <div>{children}</div>
            </div>
            {COOKIEBOT && <Cookie domainGroupId={COOKIEBOT} />}
          </main>
        </div>
      </body>
      <Analytics />
    </html>
  );
}
