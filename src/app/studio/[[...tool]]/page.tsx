import type { Metadata, Viewport } from "next";
import StudioLoader from "./StudioLoader";

export const metadata: Metadata = {
  referrer: "same-origin",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function StudioPage() {
  return <StudioLoader />;
}
