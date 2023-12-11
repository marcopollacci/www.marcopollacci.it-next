"use client";
import CookieBot from "react-cookiebot";

interface CookieProps {
  domainGroupId: string;
}

export default function Cookie({ domainGroupId }: Readonly<CookieProps>) {
  const cookie = document.querySelector("#CookieBot");
  if (cookie !== null || !domainGroupId || typeof window === "undefined") {
    return null;
  }

  return <CookieBot domainGroupId={domainGroupId} />;
}
