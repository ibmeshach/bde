import { SignedIn, SignedOut, UserButton, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import NavItemsAdmin from "./NavItemsAdmin";
import Media from "react-media";

const Header = async () => {
  let user = await currentUser();
  try {
    user = await currentUser();
    // Rest of the code
  } catch (error) {
    console.error("Error in Header component:", error);
  }

  return (
    <header className="w-full border-b bg-[#00192F]">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-12">
          <Image
            src="/assets/icons/logo.svg"
            width={60}
            height={50}
            alt="Evently logo"
          />
        </Link>

        {user?.publicMetadata?.role == "admin" ? (
          <>
            <SignedIn>
              <nav className="md:flex-between hidden w-full max-w-xs">
                <NavItemsAdmin />
              </nav>
            </SignedIn>

            <SignedOut>
              <nav className="md:flex-between hidden w-full max-w-xs">
                <NavItems />
              </nav>
            </SignedOut>
          </>
        ) : (
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        )}

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-lg" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
