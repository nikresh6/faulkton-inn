import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallPrompt } from "@/components/CallPrompt";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://faulkton-inn.vercel.app"),
  title: { default: "Faulkton Inn | Faulkton, South Dakota", template: "%s | Faulkton Inn" },
  description: "A warm, family-run stay at 700 Main Street in Faulkton, South Dakota.",
  icons: { icon: [{ url: "/icon.svg?v=3", type: "image/svg+xml" }] },
  openGraph: { title: "Faulkton Inn", description: "Stay in the heart of Faulkton.", images: ["/images/faulkton-inn-exterior.jpg"] },
  twitter: { card: "summary_large_image", title: "Faulkton Inn", description: "Stay in the heart of Faulkton.", images: ["/images/faulkton-inn-exterior.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "Hotel", name: "Faulkton Inn", telephone: "+1-605-598-4567", email: "700faulktoninn@gmail.com", address: { "@type": "PostalAddress", streetAddress: "700 Main Street", addressLocality: "Faulkton", addressRegion: "SD", postalCode: "57438", addressCountry: "US" }, image: "/images/faulkton-inn-exterior.jpg" };
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /><CallPrompt label="Call for availability" className="mobile-sticky" /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
