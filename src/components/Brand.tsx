import Link from "next/link";
export function Brand({ light = false }: { light?: boolean }) {
  return <Link className={`brand ${light ? "brand-light" : ""}`} href="/" aria-label="Faulkton Inn home"><span className="brand-faulkton">Faulkton</span><span className="brand-inn">INN</span></Link>;
}
