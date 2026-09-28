import Image from "next/image";

const slides = [
  { src: "/images/faulkton-inn-exterior.jpg", alt: "Faulkton Inn on Main Street at dusk" },
  { src: "/images/inn-family-suite.jpg", alt: "Spacious family suite at Faulkton Inn" },
  { src: "/images/inn-room.jpg", alt: "Comfortable guest room at Faulkton Inn" },
];

export function HeroSlideshow() {
  return (
    <div className="hero-slideshow" role="group" aria-label="A look inside Faulkton Inn">
      {slides.map((slide, index) => (
        <div className={`hero-slide hero-slide-${index + 1}`} key={slide.src}>
          <Image src={slide.src} alt={slide.alt} fill loading={index === 0 ? "eager" : "lazy"} sizes="100vw" />
        </div>
      ))}
      <div className="hero-slide-progress" aria-hidden="true">
        {slides.map((slide, index) => <i key={slide.src} className={`hero-progress-${index + 1}`} />)}
      </div>
    </div>
  );
}
