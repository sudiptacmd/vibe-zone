import React from "react";
import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div>
      <UserButton signOutRedirectUrl="/" />
    </div>
  );
}
