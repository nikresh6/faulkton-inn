import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { rooms } from "@/lib/data";
export const metadata: Metadata = { title: "Rooms", description: "Explore room layouts at Faulkton Inn." };
export default function RoomsPage(){return <><PageHero eyebrow="Find your fit" title="Rooms for real life.">Practical, comfortable layouts for solo travelers, couples, families, and groups. Room names and configurations are based on current booking listings and pending owner confirmation.</PageHero><section className="content-section shell"><div className="room-grid rooms-all">{rooms.map((r,i)=><RoomCard key={r.slug} room={r} index={i}/>)}</div></section></>}
