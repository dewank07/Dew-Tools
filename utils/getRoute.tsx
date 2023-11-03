"use client";
import { usePathname } from "next/navigation";
export default function getRoute() {
  const pathname = usePathname();
  console.log(pathname);
  return pathname.split("/");
}
