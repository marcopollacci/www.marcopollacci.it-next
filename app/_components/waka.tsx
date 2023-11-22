"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface WakaComponentProps {
  svg: string;
}

export default function WakaComponent({ svg }: Readonly<WakaComponentProps>) {
  const aSvg = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!aSvg.current) return;
    aSvg.current.innerHTML = svg;
  }, [svg]);

  return (
    <Link
      ref={aSvg}
      href="https://wakatime.com/@2729ac0c-0ebb-4599-b424-3a6648627bff"
      aria-label="Wakatime profile"
    />
  );
}
