// import type {Metadata} from 'next';
// import {metadata as studioMetadata} from 'next-sanity/studio/metadata';

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Portfolio Admin",
//   description: "Zhang's portfolio CMS",
// };

// export const metadata: Metadata = {
//   ...studioMetadata,
//   // Overrides the viewport to resize behavior
//   viewport: `${studioMetadata.viewport}, interactive-widget=resizes-content`,
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
