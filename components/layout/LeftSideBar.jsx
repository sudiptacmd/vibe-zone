import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import { UserButton, SignedIn, SignOutButton } from "@clerk/nextjs";
import { Logout } from "@mui/icons-material";

export default function LeftSideBar() {
  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar">
      <Link href="/">
        <Image src="/assets/logo.png" width={200} height={200} alt="logo" />
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href="/">
            <Image
              src="/assets/phucmai.png"
              width={50}
              height={50}
              alt="profile photo"
              className="rounded-full"
            />
          </Link>
          <p className="text-small-bold">Phuc Mai</p>
        </div>
        <div className="flex text-light-1 justify-between">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">999</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>
        <hr />
        <Menu />
        <hr />
        <div className="flex gap-4 items-center cursor-pointer">
          <UserButton />
          <p className="text-light-1 text-body-bold">Manage Account</p>
        </div>
        <div>
          <SignedIn>
            <SignOutButton>
              <div className="flex gap-4 items-center cursor-pointer">
                <Logout sx={{ color: "white", fontSize: "32px" }} />
                <p className="text-light-1 text-body-bold">Logout</p>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
