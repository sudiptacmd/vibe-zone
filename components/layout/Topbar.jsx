"use client";
import { useState } from "react";
import { Add, Logout, Search } from "@mui/icons-material";
import { useRouter } from "next/router";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  // const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = () => {};

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for posts, people"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="search-icon" onClick={() => handleSearch} />
      </div>
      <button
        className="create-post-btn"
        //onClick={() => router.push("/create-post")}
      >
        <Add /> <p>Create A Post</p>
      </button>
      <div className="flex gap-3">
        <SignedIn>
          <SignOutButton>
            <div className="flex items-center cursor-pointer md:hidden">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
            </div>
          </SignOutButton>
        </SignedIn>
        <Link href="/">
          <Image
            src="/assets/phucmai.png"
            alt="profile photo"
            width={50}
            height={50}
            className="rounded-full md:hidden"
          />
        </Link>
      </div>
    </div>
  );
}
