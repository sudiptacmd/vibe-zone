import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";

import LeftSideBar from "@/components/layout/LeftSideBar";
import MainContainer from "@/components/layout/MainContainer";
import Topbar from "@/components/layout/Topbar";
import RightSideBar from "@/components/layout/RightSideBar";
import Bottombar from "@/components/layout/Bottombar";

export const metadata = {
  title: "Vibe Zone",
  description: "Vibe Zone",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}  bg-purple-2 text-light-1`}>
          <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>{children}</MainContainer>
            <RightSideBar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
