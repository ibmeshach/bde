import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-[#00192F]">
      <div className="flex-center text-gray-500 wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={60}
            height={38}
          />
        </Link>

        <p>2023 BlackDiamondEvents. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
