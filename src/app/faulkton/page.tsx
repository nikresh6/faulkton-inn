import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Explore Faulkton", description: "A local guide to Faulkton history, landmarks, food, parks, and the Carousel City." };

const restaurants = [
  { name: "Buttercup", detail: "Specialty coffee, drinks, gifts, and a friendly place to ease into the morning.", address: "710 Main Street · 2-minute walk", url: "https://www.google.com/maps/search/?api=1&query=Buttercup+Coffee+Faulkton+SD" },
  { name: "Ber Mac", detail: "Pizza, subs, salads, wraps, fuel, and road-trip basics directly across Main Street.", address: "701 Main Street · 2-minute walk", url: "https://www.google.com/maps/search/?api=1&query=Ber+Mac+Faulkton+SD" },
  { name: "Blondie’s Tables & Taps", detail: "Burgers, shareable starters, and familiar American favorites in a relaxed local setting.", address: "203 9th Avenue South · 5-minute walk", url: "https://www.google.com/maps/search/?api=1&query=Blondies+Tables+and+Taps+Faulkton+SD" },
  { name: "Short Stop Bar", detail: "A casual neighborhood bar and restaurant near the inn on Main Street.", address: "800 Main Street, Suite 3 · 3-minute walk", url: "https://www.google.com/maps/search/?api=1&query=Short+Stop+Bar+Faulkton+SD" },
  { name: "J & J Bar", detail: "A long-running local gathering place for a drink and an easygoing evening out.", address: "119 8th Avenue South · 5-minute walk", url: "https://www.google.com/maps/search/?api=1&query=J+and+J+Bar+Faulkton+SD" },
  { name: "Bauer’s Grocery Store", detail: "A useful stop for snacks, drinks, groceries, and anything you forgot to pack.", address: "800 Main Street · 3-minute walk", url: "https://www.google.com/maps/search/?api=1&query=Bauers+Grocery+Store+Faulkton+SD" },
];

const nearby = [
  { distance: "0.2 mi", time: "3-minute walk", name: "Faulkton City Park", detail: "Green space, the Lions Garden, and six first-come camping spots." },
  { distance: "0.3 mi", time: "5-minute walk", name: "Faulk County Courthouse", detail: "A handsome downtown landmark on an easy walk from the inn." },
  { distance: "0.9 mi", time: "16-minute walk", name: "Pickler Mansion", detail: "The Pink Castle and one of Faulkton’s most important historic homes." },
  { distance: "4.6 mi", time: "7-minute drive", name: "Lakeside Country Club", detail: "A nine-hole course beside Lake Faulkton with daily green fees." },
];

const roadTrips = [
  { place: "Aberdeen", distance: "63 miles", time: "about 1½ hours", detail: "Museums, shopping, dining, and the closest larger regional center.", url: "https://visitaberdeensd.com/", image: "/images/aberdeen.jpg", alt: "Storybook Land in Aberdeen, South Dakota", credit: "Library of Congress", creditUrl: "https://commons.wikimedia.org/wiki/File:Storybook_Land_Park,_Aberdeen,_South_Dakota_LCCN2017708925.tif" },
  { place: "Pierre", distance: "100 miles", time: "about 2 hours", detail: "Visit the State Capitol, the Trail of Governors, and the Missouri River.", url: "https://www.travelsouthdakota.com/city/pierre", image: "/images/pierre.jpg", alt: "South Dakota State Capitol in Pierre", credit: "Warren LeMay", creditUrl: "https://commons.wikimedia.org/wiki/File:South_Dakota_State_Capitol,_Capitol_Avenue,_Pierre,_SD_-_53748194705.jpg" },
  { place: "Badlands National Park", distance: "about 218 miles", time: "about 4 hours", detail: "A dramatic western South Dakota drive with overlooks, trails, and wildlife.", url: "https://www.nps.gov/badl/index.htm", image: "/images/badlands.jpg", alt: "Rock formations and prairie in Badlands National Park", credit: "NPS", creditUrl: "https://commons.wikimedia.org/wiki/File:Panoramic_view_of_badland_formations_from_Cedar_Pass_Lodge,_Badlands_National_Park,_2009.jpg" },
  { place: "Mount Rushmore", distance: "about 314 miles", time: "about 6 hours", detail: "An iconic Black Hills stop best planned as part of a longer road trip.", url: "https://www.nps.gov/moru/index.htm", image: "/images/mount-rushmore.jpg", alt: "Mount Rushmore National Memorial", credit: "Dean Franklin", creditUrl: "https://commons.wikimedia.org/wiki/File:Dean_Franklin_-_06.04.03_Mount_Rushmore_Monument_(by-sa).jpg" },
];

export default function Faulkton() {
  return <>
    <PageHero eyebrow="Beyond your room" title="Meet the Carousel City.">Faulkton is small enough to explore at an easy pace and full of places that are worth a closer look.</PageHero>

    <section className="destination-intro shell">
      <Reveal><p className="eyebrow">A little local history</p><h2>A prairie town with stories to tell.</h2></Reveal>
      <Reveal delay={120}><p>Faulkton took shape as a county seat during the Dakota Territory years. You can still find that history in a Victorian mansion, a much-loved carousel, a family-run movie theater, and murals painted across downtown.</p></Reveal>
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
      <div className="dining-grid">{restaurants.map((place, index) => <Reveal className="dining-card" delay={index * 55} key={place.name}><span>0{index + 1}</span><h3>{place.name}</h3><p>{place.detail}</p><a href={place.url} target="_blank" rel="noreferrer">{place.address} <i>↗</i></a></Reveal>)}</div>
    </div></section>

    <section className="nearby-section shell">
      <Reveal className="nearby-heading"><p className="eyebrow">Close to the inn</p><h2>Leave the car parked.</h2><p>Much of Faulkton is within an easy walk of 700 Main Street.</p></Reveal>
      <div className="nearby-grid">{nearby.map((place, index) => <Reveal className="nearby-card" delay={index * 70} key={place.name}><span>{place.distance}</span><small>{place.time}</small><h3>{place.name}</h3><p>{place.detail}</p></Reveal>)}</div>
    </section>

    <section className="outdoors-section shell">
      <Reveal className="things-heading"><p className="eyebrow">Things to do</p><h2>Make a day of it.</h2><div className="things-images"><div><Image src="/images/faulkton-mural.jpg" alt="Faulkton elevator mural" fill sizes="32vw" /></div><div><Image src="/images/faulkton-carousel.jpg" alt="Faulkton city carousel" fill sizes="22vw" /></div></div></Reveal>
      <div className="outdoors-list">
        <Reveal delay={60}><span>01</span><div><h3>Walk the murals</h3><p>Start with the 110-foot elevator mural, then look for smaller works throughout town.</p></div></Reveal>
        <Reveal delay={100}><span>02</span><div><h3>Ride the carousel</h3><p>The restored 1925 carousel runs from Memorial Day through Labor Day, with posted seasonal hours.</p></div></Reveal>
        <Reveal delay={140}><span>03</span><div><h3>See a movie at the Lyric</h3><p>Catch a current film inside a family-run theater that has welcomed moviegoers since 1950.</p></div></Reveal>
        <Reveal delay={180}><span>04</span><div><h3>Fish at Lake Faulkton</h3><p>The 115-acre lake sits two miles west of town and is known for perch, northern pike, camping, and wildlife watching.</p></div></Reveal>
        <Reveal delay={220}><span>05</span><div><h3>Play nine holes</h3><p>Lakeside Country Club is a par-34 course beside the lake, with daily green fees and cart rentals.</p></div></Reveal>
        <Reveal delay={260}><span>06</span><div><h3>Cool off at the pool</h3><p>Faulkton’s outdoor pool opens seasonally around Memorial Day and is a good summer stop for families.</p></div></Reveal>
      </div>
    </section>

    <section className="roadtrip-section"><div className="shell">
      <Reveal className="roadtrip-heading"><p className="eyebrow light">From Faulkton</p><h2>Worth the drive.</h2><p>Use Faulkton as a quiet stop on a longer South Dakota trip. Distances and times are approximate and can change with your route and road conditions.</p></Reveal>
      <div className="roadtrip-grid">{roadTrips.map((trip, index) => <Reveal className="roadtrip-card" delay={index * 70} key={trip.place}><div className="roadtrip-image"><Image src={trip.image} alt={trip.alt} fill sizes="(max-width: 720px) 100vw, 25vw" /><a href={trip.creditUrl} target="_blank" rel="noreferrer">Photo: {trip.credit}</a></div><span>0{index + 1}</span><h3>{trip.place}</h3><strong>{trip.distance} · {trip.time}</strong><p>{trip.detail}</p><a className="text-link light-link" href={trip.url} target="_blank" rel="noreferrer">Plan the trip <span>↗</span></a></Reveal>)}</div>
    </div></section>

    <section className="local-plan shell"><Reveal><p className="eyebrow">Before you go</p><h2>Ask a local.</h2><p>Seasonal hours are common in a small town. Check with the business or attraction before making a special trip. You can also ask us at the inn. We are glad to point you in the right direction.</p><a className="button" href="https://www.faulktonsd.com/tourism" target="_blank" rel="noreferrer">Visit Faulkton tourism</a></Reveal></section>
  </>;
}
