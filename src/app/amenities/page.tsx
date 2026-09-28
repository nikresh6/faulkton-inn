import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CallPrompt } from "@/components/CallPrompt";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { hotel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Amenities & Stay Information",
  description: "Amenities, common questions, and practical information for a stay at Faulkton Inn.",
};

const amenities = [
  ["01", "Free Wi-Fi", "Connect in your room or from the guest lounge."],
  ["02", "Free parking", "Easy self-parking is available at the property."],
  ["03", "Daily housekeeping", "Regular room care keeps your stay comfortable."],
  ["04", "EV charging", "Charge your vehicle while you settle in for the night."],
  ["05", "Outdoor grill", "A relaxed outdoor spot for a simple meal together."],
  ["06", "Guest lounge", "Coffee, seating, and a comfortable place to spend time outside your room."],
] as const;

const questions = [
  { question: "How do I reserve a room?", answer: <>Call us at <a href={hotel.phoneHref}>{hotel.phone}</a>. We will confirm the room, current rate, and details with you directly.</> },
  { question: "What time are check-in and checkout?", answer: <>Current public information lists check-in from 2:00 PM to 9:00 PM and checkout by 11:00 AM. Please call ahead if you expect to arrive late.</> },
  { question: "Are pets allowed?", answer: <>Current public information says pets are not allowed. Call before your stay if you have a service-animal or accessibility question.</> },
  { question: "Is there an elevator?", answer: <>The inn does not have an elevator. Please call before reserving so we can discuss the best available room for your needs.</> },
];

export default function Amenities() {
  return <>
    <PageHero eyebrow="Your stay" title="The comforts that matter.">Practical amenities, useful answers, and the details you need before you arrive.</PageHero>
    <section className="amenities-intro shell">
      <Reveal><p className="eyebrow">Comfort without fuss</p><h2>Everything you need for an easy stay.</h2></Reveal>
      <Reveal delay={100}><p>Faulkton Inn keeps things simple: a clean room, dependable essentials, and people you can call when you have a question.</p></Reveal>
    </section>
    <section className="amenities-editorial shell">
      <Reveal className="amenities-photo"><Image src="/images/inn-lobby.jpg" alt="Faulkton Inn guest lounge with seating and coffee" fill sizes="55vw" /></Reveal>
      <div className="amenities-expanded-list">{amenities.map(([number, title, description], index) => <Reveal delay={index * 55} key={title}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></Reveal>)}</div>
    </section>
    <section className="stay-details-section"><div className="shell">
      <Reveal className="stay-details-heading"><p className="eyebrow light">Good to know</p><h2>Answers before you pack.</h2><p>Policies can change, so call us if a detail is important to your plans.</p></Reveal>
      <div className="amenities-faq">{questions.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      <div className="stay-links"><Link href="/faq">See all FAQs <span>↗</span></Link><Link href="/policies">Read stay policies <span>↗</span></Link><Link href="/accessibility">Accessibility information <span>↗</span></Link></div>
    </div></section>
    <section className="amenities-call shell"><Reveal><p className="eyebrow">Still wondering?</p><h2>Call and ask us.</h2><p>A real person at the inn can answer questions about rooms, rates, access, and your arrival.</p><CallPrompt label="Call Faulkton Inn" className="button" /></Reveal></section>
  </>;
}
