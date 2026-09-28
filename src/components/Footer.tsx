import Link from "next/link";
import { Brand } from "./Brand";
import { hotel } from "@/lib/data";
export function Footer() {
  return <footer className="footer"><div className="footer-main shell"><div><Brand light /><p>A comfortable, family-run stay in the heart of Faulkton.</p></div><div><h2>Visit</h2><p>{hotel.address}</p><a href={hotel.phoneHref}>{hotel.phone}</a><a href={`mailto:${hotel.email}`}>{hotel.email}</a></div><div><h2>Plan your stay</h2><Link href="/rooms">Rooms</Link><Link href="/faq">FAQs</Link><Link href="/policies">Policies</Link><Link href="/accessibility">Accessibility</Link></div></div><div className="footer-base shell"><span>© {new Date().getFullYear()} Faulkton Inn</span><Link href="/privacy">Privacy</Link><span>Faulkton, South Dakota</span></div></footer>;
}
