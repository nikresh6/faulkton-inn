import Link from "next/link";
import Image from "next/image";
import type { Room } from "@/lib/data";
export function RoomCard({ room, index }: { room: Room; index: number }) {
  return <article className="room-card"><Link className={`room-visual ${room.tone}`} href={`/rooms/${room.slug}`} aria-label={`View ${room.shortName}`}><Image src={room.image} alt={room.imageAlt} fill sizes="(max-width: 700px) 100vw, 50vw" /><span className="room-number">0{index + 1}</span><span className="room-view">Explore room <i>↗</i></span></Link><div className="room-card-body"><p className="eyebrow">{room.beds} · Sleeps up to {room.occupancy}</p><h3><Link href={`/rooms/${room.slug}`}>{room.shortName}</Link></h3><p>{room.summary}</p><Link className="text-link" href={`/rooms/${room.slug}`}>View room <span>↗</span></Link></div></article>;
}
