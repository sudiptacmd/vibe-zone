"use client";
import { usePathname } from "next/navigation";
import Topbar from "./Topbar";
import { pageTitles } from "@/constants";

export default function MainContainer({ children }) {
  const pathname = usePathname();
  const regex = /^\/([^\/]+)/;
  const currPath = pathname.match(regex) ? pathname.match(regex)[0] : pathname;

  const title = pageTitles.find((pg) => pg.url === currPath)?.title || "";
  return (
    <section className="flex flex-col flex-1 max-w-3xl px-4 md:px-10 lg:px-4 xl:px-20">
      <Topbar />
      <div className="mt-6 mb-20">
        <h1 className="mb-5 text-heading2-bold max-sm:text-heading3-bold text-light-1">
          {title}
        </h1>
        <div className="h-screen overflow-y-scroll custom-scrollbar">
          {children}
        </div>
      </div>
    </section>
  );
}
