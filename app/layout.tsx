import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BlackDiamondEntertainment",
  description:
    "Music festivals, concerts, and events in the greater Maine area.  Monthly @popupportlandme on 2nd Sunday’s  2nd annual @summersidefestival 2019 TBA",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
