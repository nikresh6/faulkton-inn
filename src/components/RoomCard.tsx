import Link from "next/link";
import type { Room } from "@/lib/data";
export function RoomCard({ room, index }: { room: Room; index: number }) {
  return <article className="room-card"><Link className={`room-visual ${room.tone}`} href={`/rooms/${room.slug}`} aria-label={`View ${room.shortName}`}><span className="room-number">0{index + 1}</span><span className="room-bed-art" aria-hidden="true"><i></i><i></i><b></b></span><span>Photography coming soon</span></Link><div className="room-card-body"><p className="eyebrow">{room.beds} · Sleeps up to {room.occupancy}</p><h3><Link href={`/rooms/${room.slug}`}>{room.shortName}</Link></h3><p>{room.summary}</p><Link className="text-link" href={`/rooms/${room.slug}`}>View room <span>↗</span></Link></div></article>;
}
