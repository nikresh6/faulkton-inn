export type Room = { slug: string; name: string; shortName: string; summary: string; occupancy: number; beds: string; tone: string; image: string; imageAlt: string };

export const rooms: Room[] = [
  { slug: "business-single-room", name: "Business Single Room", shortName: "Queen Room", summary: "A practical room for solo travelers or couples.", occupancy: 3, beds: "1 queen bed", tone: "room-sage", image: "/images/inn-room.jpg", imageAlt: "Guest room at Faulkton Inn with work area and in-room conveniences" },
  { slug: "double-room", name: "Basic Double Room", shortName: "Two Double Beds", summary: "A flexible option for travelers who need two beds.", occupancy: 4, beds: "2 double beds", tone: "room-rust", image: "/images/inn-family-suite.jpg", imageAlt: "Spacious multi-bed guest room at Faulkton Inn" },
  { slug: "two-queen-room", name: "Basic Room", shortName: "Two Queen Beds", summary: "Two queen beds for families, friends, or longer stays.", occupancy: 4, beds: "2 queen beds", tone: "room-gold", image: "/images/inn-family-suite.jpg", imageAlt: "Two queen bed room at Faulkton Inn" },
  { slug: "family-studio-suite", name: "Comfort Studio Suite", shortName: "Family Studio Suite", summary: "Extra sleeping capacity for families and groups.", occupancy: 7, beds: "2 queen beds + 2 sofa beds", tone: "room-blue", image: "/images/inn-family-suite.jpg", imageAlt: "Family suite at Faulkton Inn with multiple sleeping areas" },
  { slug: "triple-room", name: "Business Triple Room", shortName: "Triple Room", summary: "A multi-bed layout for larger parties.", occupancy: 6, beds: "1 queen + 2 twin beds", tone: "room-plum", image: "/images/inn-family-suite.jpg", imageAlt: "Multi-bed guest room for larger parties at Faulkton Inn" },
];

export const hotel = {
  name: "Faulkton Inn",
  address: "700 Main Street, Faulkton, SD 57438",
  phone: "(605) 598-4567",
  phoneHref: "tel:+16055984567",
  email: "700faulktoninn@gmail.com",
  bookingUrl: "https://www.expedia.com/Faulkton-Hotels-Faulkton-Inn.h90348560.Hotel-Information",
  expediaPropertyId: "90348560",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Faulkton+Inn+700+Main+Street+Faulkton+SD+57438",
};
