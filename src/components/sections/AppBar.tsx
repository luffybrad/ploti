"use client";

import Image from "next/image";
import NavDrawer from "./NavDrawer";
import tdlogo from "@/public/tdlogo.jpeg";

function AppBar() {
  return (
    <div
      className={`bg-green-700 p-5 flex flex-auto justify-between content-center text-lg gap-4`}
    >
      <div className="flex gap-5">
        <div>
          <NavDrawer />
        </div>
        <div>TechHold Developers</div>
      </div>
      <div>
        <Image
          src={tdlogo}
          alt="Image"
          width={25}
          height={25}
          quality={100}
          loading="lazy"
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default AppBar;
