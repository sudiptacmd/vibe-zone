"use client";
import React from "react";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Bottombar() {
  const pathname = usePathname();
  return (
    <div className="flex bottom-0 z-20 w-full bg-dark-1 px-6 py-3 items-center justify-between md:hidden">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            href={link.route}
            key={link.label}
            className={`flex gap-2 items-center rounded-lg py-2 px-4 
                ${isActive ? "bg-purple-1" : ""}`}
          >
            {link.icon}{" "}
            <p className="text-small-medium text-light-1 max-sm:hidden">
              {link.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
