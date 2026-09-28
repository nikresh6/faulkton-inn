import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { rooms } from "@/lib/data";
export const metadata: Metadata = { title: "Rooms", description: "Explore room layouts at Faulkton Inn." };
export default function RoomsPage(){return <><PageHero eyebrow="Find your room" title="Five ways to stay.">From a single queen room to a spacious studio suite, there is an option for solo trips, family visits, and groups.</PageHero><section className="content-section shell"><p className="room-list-note">These five room types, bed arrangements, and guest limits match the inn&apos;s current public listings. Photos show rooms at the property, but the exact layout and furnishings may vary. Call us and we&apos;ll help you find the right fit.</p><div className="room-grid rooms-all">{rooms.map((r,i)=><RoomCard key={r.slug} room={r} index={i}/>)}</div></section></>}
