"use client";

import { useEffect, useState } from "react";
import LiquidEther, { type LiquidEtherProps } from "@/components/backgrounds/liquid-ether";

export function ResponsiveLiquidEther(props: LiquidEtherProps) {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setCanRender(desktopQuery.matches && !motionQuery.matches);
    };

    update();
    desktopQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    return () => {
      desktopQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  if (!canRender) {
    return null;
  }

  return <LiquidEther {...props} />;
}
