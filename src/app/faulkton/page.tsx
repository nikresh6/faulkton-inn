import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Explore Faulkton", description: "A local guide to Faulkton history, landmarks, food, parks, and the Carousel City." };

const restaurants = [
  { name: "Blondie’s Tables & Taps", detail: "American favorites, shareable starters, burgers, and a relaxed local atmosphere.", address: "203 9th Avenue South", url: "https://www.google.com/maps/search/?api=1&query=Blondies+Tables+and+Taps+Faulkton+SD" },
  { name: "Buttercup Coffee & More", detail: "Specialty coffee, non-coffee drinks, gifts, and a friendly place to slow down for a while.", address: "710 Main Street", url: "https://www.google.com/maps/search/?api=1&query=Buttercup+Coffee+Faulkton+SD" },
  { name: "Ber Mac", detail: "A convenient Main Street stop for pizza, subs, salads, wraps, fuel, and road-trip basics.", address: "701 Main Street", url: "https://www.google.com/maps/search/?api=1&query=Ber+Mac+Faulkton+SD" },
  { name: "Short Stop Bar", detail: "A casual local bar and restaurant that regularly joins in community events.", address: "800 Main Street, Suite 3", url: "https://www.google.com/maps/search/?api=1&query=Short+Stop+Bar+Faulkton+SD" },
];

export default function Faulkton() {
  return <>
    <PageHero eyebrow="Beyond your room" title="Meet the Carousel City.">Faulkton is small enough to explore at an easy pace and full of places that are worth a closer look.</PageHero>

    <section className="destination-intro shell">
      <Reveal><p className="eyebrow">A little local history</p><h2>A prairie town with stories to tell.</h2></Reveal>
      <Reveal delay={120}><p>Faulkton grew as a county seat in the Dakota Territory years. Its story lives on in a Victorian mansion, a much-loved carousel, a family-run movie theater, and murals that have turned downtown walls into public art.</p></Reveal>
    </section>

    <section className="faulkton-landmarks shell">
      <Reveal className="landmark-feature">
        <div className="landmark-image"><Image src="/images/faulkton-mural.jpg" alt="The large mural painted on the Faulkton grain elevator" fill sizes="65vw" /></div>
        <div className="landmark-copy"><span>Public art</span><h3>The Faulkton Elevator Mural</h3><p>Australian artist Guido van Helten painted this 110-foot portrait of local life in 2018. The faces were inspired by people from the community, and the mural is free to view from Main Street year-round.</p><a className="text-link" href="https://www.faulktonsd.com/tourism/attractions/sd-largest-mural" target="_blank" rel="noreferrer">Visitor details <span>↗</span></a></div>
      </Reveal>
      <Reveal className="landmark-card" delay={80}>
        <div className="landmark-card-image"><Image src="/images/faulkton-carousel.jpg" alt="Faulkton's historic city carousel" fill sizes="40vw" /></div>
        <span>Since 1925</span><h3>The City Carousel</h3><p>Bob Ketterling brought the carousel to Faulkton in 1981 and offered rides to local children. The city later preserved it, and the tradition gave Faulkton its Carousel City nickname. Rides run seasonally.</p><a className="text-link" href="https://www.faulktonsd.com/tourism/attractions/city-carousel/" target="_blank" rel="noreferrer">Hours and history <span>↗</span></a>
      </Reveal>
      <Reveal className="landmark-card" delay={140}>
        <div className="landmark-card-image"><Image src="/images/pickler-mansion.jpg" alt="Historic interior of Pickler Mansion" fill sizes="40vw" /></div>
        <span>Local history</span><h3>Pickler Mansion</h3><p>Known locally as the Pink Castle, this 20-room Victorian home was built in stages from 1882 to 1894. Alice Pickler was active in the women’s suffrage movement, and Susan B. Anthony stayed here in 1890.</p><a className="text-link" href="https://www.faulktonsd.com/tourism/attractions/pickler-mansion" target="_blank" rel="noreferrer">Tour information <span>↗</span></a>
      </Reveal>
      <Reveal className="landmark-feature landmark-feature-reverse" delay={100}>
        <div className="landmark-image"><Image src="/images/lyric-theatre.jpg" alt="The historic Lyric Theatre in Faulkton" fill sizes="65vw" /></div>
        <div className="landmark-copy"><span>A night at the movies</span><h3>Lyric Theatre</h3><p>The Lyric opened in 1950 and is still run by the Huss family. Original doors, decades of memorabilia, and popcorn made in a vintage machine give a movie night here a character all its own.</p><a className="text-link" href="https://www.faulktonsd.com/tourism/attractions/lyric-theatre" target="_blank" rel="noreferrer">Showtime information <span>↗</span></a></div>
      </Reveal>
    </section>

    <section className="dining-section"><div className="shell">
      <Reveal className="dining-heading"><div><p className="eyebrow light">Around town</p><h2>Grab a bite.</h2></div><p>Faulkton’s food scene is casual and local. Hours can change, especially on Sundays and around holidays, so it is worth checking before you head out.</p></Reveal>
      <div className="dining-grid">{restaurants.map((place, index) => <Reveal className="dining-card" delay={index * 70} key={place.name}><span>0{index + 1}</span><h3>{place.name}</h3><p>{place.detail}</p><a href={place.url} target="_blank" rel="noreferrer">{place.address} <i>↗</i></a></Reveal>)}</div>
    </div></section>

    <section className="outdoors-section shell">
      <Reveal><p className="eyebrow">Fresh air</p><h2>Take the long way around.</h2></Reveal>
      <div className="outdoors-list">
        <Reveal delay={60}><span>01</span><div><h3>Faulkton City Park</h3><p>A nearby green space with room to walk, relax, and let the kids stretch their legs.</p></div></Reveal>
        <Reveal delay={110}><span>02</span><div><h3>Hope’s Park & Playground</h3><p>A family-friendly stop listed among the city’s local recreation options.</p></div></Reveal>
        <Reveal delay={160}><span>03</span><div><h3>Lake Faulkton</h3><p>A local option for time near the water. Conditions and access can vary by season.</p></div></Reveal>
        <Reveal delay={210}><span>04</span><div><h3>Lakeside Country Club</h3><p>Golf just outside town, with seasonal play and local events throughout the year.</p></div></Reveal>
      </div>
    </section>

    <section className="local-plan shell"><Reveal><p className="eyebrow">Before you go</p><h2>Ask a local.</h2><p>Seasonal hours are common in a small town. Check with the business or attraction before making a special trip. You can also ask us at the inn. We are glad to point you in the right direction.</p><a className="button" href="https://www.faulktonsd.com/tourism" target="_blank" rel="noreferrer">Visit Faulkton tourism</a></Reveal></section>
  </>;
}
