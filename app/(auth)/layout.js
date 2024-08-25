import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Auth - Vibe Zone",
  description: "Vibe Zone",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}  bg-purple-2`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
