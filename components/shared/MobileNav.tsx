import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import { SignedIn, SignedOut, UserButton, currentUser } from "@clerk/nextjs";
import NavItemsAdmin from "./NavItemsAdmin";

const MobileNav = async () => {
  const user = await currentUser();

  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer "
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-[#00192F] md:hidden">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={60}
            height={58}
          />
          <Separator className="border border-gray-50" />
          {user?.publicMetadata?.role == "admin" ? (
            <>
              <SignedIn>
                <nav className="md:flex-between md:hidden w-full max-w-xs">
                  <NavItemsAdmin />
                </nav>
              </SignedIn>
              <SignedOut>
                <nav className="md:flex-between md:hidden w-full max-w-xs">
                  <NavItems />
                </nav>
              </SignedOut>
            </>
          ) : (
            <nav className="md:flex-between md:hidden w-full max-w-xs">
              <NavItems />
            </nav>
          )}
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
