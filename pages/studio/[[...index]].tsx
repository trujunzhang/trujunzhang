import React from "react";
import { NextStudio } from "next-sanity/studio";

import type { Metadata, Viewport } from "next";
import config from "../../sanity.config";

import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

// Set the correct `viewport`, `robots` and `referrer` meta tags
export const metadata: Metadata = {
  ...studioMetadata,
  // Overrides the title until the Studio is loaded
  title: "Loading Studio...",
};

export const viewport: Viewport = {
  ...studioViewport,
  // Overrides the viewport to resize behavior
  interactiveWidget: "resizes-content",
};

/**
 * http://localhost:3000/studio
 * login via google
 */
export default function StudioPage() {
  return <NextStudio config={config} />;
}
