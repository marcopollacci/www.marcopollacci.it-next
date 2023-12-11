"use client";
import CookieBot from "react-cookiebot";

interface CookieProps {
  domainGroupId: string;
}

export default function Cookie({ domainGroupId }: Readonly<CookieProps>) {
  if (document) {
    const cookie = document.querySelector("#CookieBot");
    if (cookie !== null || !domainGroupId || typeof window === "undefined") {
      return null;
    }

    return <CookieBot domainGroupId={domainGroupId} />;
  }
  return null;
}
