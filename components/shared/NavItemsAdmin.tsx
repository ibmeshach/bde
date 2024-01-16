"use client";

import { headerLinksAdmin } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItemsAdmin = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinksAdmin.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`text-primary-500
             flex-center p-medium-16 whitespace-nowrap `}
            // className={`${
            //   isActive && "text-primary-500"
            // } flex-center p-medium-16 whitespace-nowrap `}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItemsAdmin;
