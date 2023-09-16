// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: "400",
//   style: "normal",
// });
//

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={poppins.className}>{children}</body> */}
      <body className={"font-appFont"}>{children}</body>
    </html>
  );
}
