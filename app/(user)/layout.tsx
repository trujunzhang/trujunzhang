import "../globals.css";
import type { Metadata } from "next";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: "400",
//   style: "normal",
// });
//
export const metadata: Metadata = {
  title: "Zhang | Designer, Frontend Developer & Mobile",
  description:
    "I design and code beautifully simple things, and I love what I do.",
  keywords: [
    "Portfolio",
    "Next.js",
    "Sanity.io",
    "React",
    "Framer Motion",
    "Developer",
  ],
  openGraph: {
    title: "Zhang | Designer, Frontend Developer & Mobile",
    description:
      "I design and code beautifully simple things, and I love what I do.",
    url: "https://trujunzhang.com",
    siteName: "Zhang's Portfolio",
    images: [
      {
        url: "https://aviral.xyz/og-image.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={poppins.className}>{children}</body> */}
      <body className={'font-poppins'}>{children}</body>
    </html>
  );
}
