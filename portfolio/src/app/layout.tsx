import type { Metadata } from "next";
import { Nunito, Noto_Serif } from "next/font/google";
import NavBar from "@/app/ui/shared/navbar/navBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nonSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ogochukwu Alozie Bight Portfolio",
  description:
    "A portfolio to render all app i have created as an amazing software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${nonSerif.className} antialiased md:px-40 animate-slideInSlow`}
      >
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
