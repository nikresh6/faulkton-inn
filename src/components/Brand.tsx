import Link from "next/link";
import Image from "next/image";
export function Brand({ light = false }: { light?: boolean }) {
  return <Link className={`brand ${light ? "brand-light" : ""}`} href="/" aria-label="Faulkton Inn home"><span className="brand-crop"><Image src="/brand/faulkton-inn-logo.png" alt="Faulkton Inn" width={2172} height={724} priority /></span></Link>;
}
