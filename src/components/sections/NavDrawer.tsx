"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
function NavDrawer() {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-green-700 text-white hover:bg-green-200 hover:text-green-700">
              <CiMenuBurger />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-8 bg-green-700 text-white">
              {pages.map((page) => (
                <Link key={page.name} href={page.path} legacyBehavior passHref>
                  <NavigationMenuLink className="text-xl hover:text-green-700 p-2">
                    {page.name}
                  </NavigationMenuLink>
                </Link>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavDrawer;
