"use client";

import { usePathname } from "next/navigation";

export default function PageReloader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // The key forces React to remount the children when pathname changes
  return <div key={pathname}>{children}</div>;
}
