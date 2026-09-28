export type Room = { slug: string; name: string; shortName: string; summary: string; occupancy: number; beds: string; tone: string; image: string; imageAlt: string };

export const rooms: Room[] = [
  { slug: "business-single-room", name: "Business Single Room", shortName: "Business Single Room", summary: "One queen bed with room for up to three guests.", occupancy: 3, beds: "1 queen bed", tone: "room-sage", image: "/images/inn-room.jpg", imageAlt: "Guest room at Faulkton Inn" },
  { slug: "double-room", name: "Basic Double Room", shortName: "Basic Double Room", summary: "Two double beds with room for up to four guests.", occupancy: 4, beds: "2 double beds", tone: "room-rust", image: "/images/inn-family-suite.jpg", imageAlt: "Guest room at Faulkton Inn" },
  { slug: "two-queen-room", name: "Basic Room", shortName: "Basic Room", summary: "Two queen beds with room for up to four guests.", occupancy: 4, beds: "2 queen beds", tone: "room-gold", image: "/images/inn-family-suite.jpg", imageAlt: "Guest room at Faulkton Inn" },
  { slug: "family-studio-suite", name: "Comfort Studio Suite", shortName: "Comfort Studio Suite", summary: "A roomy setup for families and groups of up to seven.", occupancy: 7, beds: "2 queen beds, 1 double sofa bed, 1 twin sofa bed", tone: "room-blue", image: "/images/inn-family-suite.jpg", imageAlt: "Family suite at Faulkton Inn" },
  { slug: "triple-room", name: "Business Triple Room", shortName: "Business Triple Room", summary: "Three beds with room for up to six guests.", occupancy: 6, beds: "1 queen bed, 1 twin bed, 1 large twin bed", tone: "room-plum", image: "/images/inn-family-suite.jpg", imageAlt: "Guest room at Faulkton Inn" },
];

export const hotel = {
  name: "Faulkton Inn",
  address: "700 Main Street, Faulkton, SD 57438",
  phone: "(605) 598-4567",
  phoneHref: "tel:+16055984567",
  email: "700faulktoninn@gmail.com",
  tripadvisorUrl: "https://www.tripadvisor.com/Hotel_Review-g54602-d3511437-Reviews-Faulkton_Inn-Faulkton_South_Dakota.html",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Faulkton+Inn+700+Main+Street+Faulkton+SD+57438",
};
