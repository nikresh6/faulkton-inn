import Image from "next/image";
import Link from "next/link";
import { BookingBar } from "@/components/BookingBar";
import { RoomCard } from "@/components/RoomCard";
import { Reveal } from "@/components/Reveal";
import { hotel, rooms } from "@/lib/data";

const reviews = [
  { quote: "“Welcoming, cute and cozy.”", name: "NorthStar07619304915", date: "July 2024" },
  { quote: "“Cozy, clean, and friendly.”", name: "Rebecca B.", date: "April 2023" },
  { quote: "“Very friendly, very clean.”", name: "CThompson", date: "July 2022" },
];

export default function Home() { return <>
  <section className="hero">
    <Image src="/images/faulkton-inn-exterior.jpg" alt="Exterior of Faulkton Inn at 700 Main Street" fill priority sizes="100vw" />
    <div className="hero-shade"></div><div className="hero-grain"></div>
    <div className="hero-copy shell"><p className="eyebrow light hero-kicker">Family-run hospitality · Faulkton, South Dakota</p><h1><span>Stay awhile.</span><br/>Feel at home.</h1><p>Comfortable rooms, a generous welcome, and an easy place to settle in — right at 700 Main Street.</p><div className="actions"><Link className="button button-cream" href="/booking">Plan your stay</Link><a className="button button-ghost" href={hotel.phoneHref}>Call the inn</a></div></div>
    <div className="hero-meta"><span>45.03° N</span><span>99.12° W</span><span className="hero-scroll">Scroll to discover ↓</span></div>
    <p className="photo-credit">Faulkton Area Economic Development</p>
  </section>

  <div className="booking-wrap shell"><BookingBar /></div>

  <section className="intro-section shell">
    <Reveal className="intro-title"><p className="eyebrow">The heart of the Carousel City</p><h2>A small inn with<br/>a big welcome.</h2></Reveal>
    <Reveal className="intro-copy" delay={120}><p>Faulkton Inn is an independent, family-run stay made for the way people really travel: road trips, family weekends, work in town, community celebrations, and the moments in between.</p><div className="signature-line"><i></i><span>Rebekah &amp; José Epp<br/><small>Your hosts</small></span></div></Reveal>
  </section>

  <section className="editorial-gallery shell" aria-label="Faulkton Inn gallery">
    <Reveal className="gallery-main"><Image src="/images/inn-family-suite.jpg" alt="Family suite at Faulkton Inn" fill sizes="70vw"/><span>Space for everyone</span></Reveal>
    <Reveal className="gallery-side" delay={130}><Image src="/images/inn-room.jpg" alt="Guest room work and lounge area at Faulkton Inn" fill sizes="35vw"/><span>Room to settle in</span></Reveal>
    <Reveal className="gallery-detail" delay={200}><Image src="/images/inn-bathroom.jpg" alt="Guest bathroom at Faulkton Inn" fill sizes="35vw"/><span>Fresh, practical comforts</span></Reveal>
  </section>

  <section className="rooms-section">
    <div className="shell"><Reveal className="section-head"><div><p className="eyebrow">Rest easy</p><h2>Room for the way<br/>you travel.</h2></div><div><p>Choose a practical queen room, two-bed setup, or the flexible family suite. Every stay begins with the same thing: a warm Faulkton welcome.</p><Link className="text-link" href="/rooms">Explore every room <span>↗</span></Link></div></Reveal><div className="room-grid">{rooms.slice(0,3).map((room,i)=><Reveal key={room.slug} delay={i*110}><RoomCard room={room} index={i}/></Reveal>)}</div></div>
  </section>

  <section className="story-section">
    <div className="story-card shell"><Reveal className="story-photo"><Image src="/images/faulkton-inn-exterior.jpg" alt="Faulkton Inn on Main Street" fill sizes="50vw"/><span className="story-stamp">FAMILY<br/>RUN</span></Reveal><Reveal delay={140}><p className="eyebrow light">A welcome with a name</p><h2>Faulkton proud.<br/>Family run.</h2><p>Rebekah brings a gift for hospitality to the day-to-day life of the inn. José keeps the property cared for. Together, the Epps have built a place where travelers are met with the generosity and practical kindness that define a small town.</p><blockquote>“We want to give our best to update it and keep it current so that families want to come and visit our town.”</blockquote><Link className="text-link light-link" href="/about">Meet your hosts <span>↗</span></Link></Reveal></div>
  </section>

  <section className="amenities-home shell">
    <Reveal><p className="eyebrow">Simple comforts</p><h2>The essentials,<br/>thoughtfully kept.</h2><p className="amenities-lead">No overpromising. Just the useful things that make a stay easier.</p></Reveal>
    <div className="amenity-list"><Reveal delay={80}><span>01</span><h3>Free Wi-Fi</h3><p>Stay connected during your visit.</p></Reveal><Reveal delay={140}><span>02</span><h3>Free parking</h3><p>Convenient on-site self-parking.</p></Reveal><Reveal delay={200}><span>03</span><h3>EV charging</h3><p>Charge while you recharge.</p></Reveal><Reveal delay={260}><span>04</span><h3>Outdoor grill</h3><p>A relaxed place to gather outside.</p></Reveal></div>
  </section>

  <section className="local-feature">
    <Reveal className="local-images"><div className="local-img-main"><Image src="/images/faulkton-carousel.jpg" alt="Faulkton's historic carousel pavilion" fill sizes="55vw"/></div><div className="local-img-float"><Image src="/images/pickler-mansion.jpg" alt="Historic interior at Pickler Mansion" fill sizes="28vw"/></div><span className="local-number">1925</span></Reveal>
    <Reveal className="local-copy" delay={120}><p className="eyebrow light">Beyond your room</p><h2>Discover the<br/>Carousel City.</h2><p>Walk into the story of Faulkton — its landmark carousel, colorful murals, historic homes, green spaces, and a downtown where people still know one another.</p><Link className="button button-cream" href="/faulkton">Explore Faulkton</Link></Reveal>
  </section>

  <section className="reviews-section shell">
    <Reveal className="reviews-intro"><div><p className="eyebrow">Guest notes</p><h2>Kind words,<br/>warm stays.</h2></div><div className="rating-lockup"><strong>4.8</strong><span>★★★★★<small>12 Tripadvisor reviews</small></span></div></Reveal>
    <div className="reviews-grid">{reviews.map((review,i)=><Reveal className="review-card" delay={i*100} key={review.name}><div className="quote-mark">“</div><blockquote>{review.quote}</blockquote><p>{review.name}<span>{review.date} · Tripadvisor</span></p></Reveal>)}</div>
    <p className="review-disclaimer">Traveler reviews are subjective opinions published on Tripadvisor. Rating and review count checked September 2026.</p>
  </section>

  <section className="contact-band shell"><Reveal><p className="eyebrow">Find your way here</p><h2>Right on Main Street.</h2><p>{hotel.address}</p></Reveal><Reveal className="contact-actions" delay={120}><a className="button" href={hotel.mapsUrl} target="_blank" rel="noreferrer">Get directions</a><a className="text-link" href={hotel.phoneHref}>{hotel.phone}</a></Reveal></section>
  <section className="final-cta"><div className="final-cta-bg"><Image src="/images/faulkton-inn-exterior.jpg" alt="" fill sizes="100vw"/></div><div className="final-cta-shade"></div><Reveal className="final-cta-inner"><p className="eyebrow light">Your room is waiting</p><h2>Ready to settle in?</h2><p>Check current availability online, or call us directly.</p><div className="actions"><Link className="button button-cream" href="/booking">Check availability</Link><a className="button button-ghost" href={hotel.phoneHref}>Call {hotel.phone}</a></div></Reveal></section>
</>; }
