import Link from "next/link";
import { Brand } from "./Brand";
const links = [["Rooms", "/rooms"], ["Amenities", "/amenities"], ["Explore Faulkton", "/faulkton"], ["Our Story", "/about"], ["Contact", "/contact"]];
export function Header() {
  return <header className="site-header"><div className="header-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><Link className="button button-small" href="/booking">Check availability</Link><details className="mobile-menu"><summary aria-label="Open menu"><span></span><span></span><span></span></summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></details></div></header>;
}
