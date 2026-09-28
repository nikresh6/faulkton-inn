import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { rooms } from "@/lib/data";
export const metadata: Metadata = { title: "Rooms", description: "Explore room layouts at Faulkton Inn." };
export default function RoomsPage(){return <><PageHero eyebrow="Find your fit" title="Rooms for real life.">Practical, comfortable layouts for solo travelers, couples, families, and groups. Call the inn for current rates and the best available fit.</PageHero><section className="content-section shell"><div className="room-grid rooms-all">{rooms.map((r,i)=><RoomCard key={r.slug} room={r} index={i}/>)}</div></section></>}
