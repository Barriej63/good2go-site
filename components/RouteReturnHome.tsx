"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

const TARGET_ROUTES = new Set([
  "/crisis",
  "/our-solution",
  "/solution",
  "/how-it-works",
  "/scientific-foundation",
  "/evidence",
]);

export default function RouteReturnHome() {
  const pathname = usePathname();
  const [containerEl, setContainerEl] = useState<HTMLElement | null>(null);

  const shouldShow = pathname ? TARGET_ROUTES.has(pathname) : false;

  useEffect(() => {
    if (!shouldShow) return;
    const el = document.createElement("div");
    document.body.appendChild(el);
    setContainerEl(el);
    return () => {
      if (el && el.parentNode) el.parentNode.removeChild(el);
    };
  }, [shouldShow]);

  if (!shouldShow || !containerEl) return null;

  return createPortal(
    <div className="mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Return Home
        </a>
      </div>
    </div>,
    containerEl
  );
}
