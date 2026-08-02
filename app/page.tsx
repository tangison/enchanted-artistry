import Image from "next/image";
import type { CSSProperties } from "react";
import Header from "../components/Header";

const services = [
  { title: "Makeup", copy: "Beauty looks created with care for your special moments.", image: "/images/service-makeup.webp", alt: "Makeup brushes and cosmetics" },
  { title: "Hair", copy: "Styling that lets your confidence come through.", image: "/images/service-hair.webp", alt: "Styled hair" },
  { title: "Drama coaching", copy: "A creative space for expression, confidence and performance.", image: "/images/service-drama.webp", alt: "Theatre masks on silk" },
  { title: "Guidance", copy: "Guiding mothers through pregnancy, post-partum and breastfeeding.", image: "/images/service-mentorship.webp", alt: "Notebook and pen" },
  { title: "Content creation", copy: "Creative content, design and meaningful storytelling.", image: "/images/service-content.webp", alt: "Content creation equipment" },
];

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero" id="about">
        <div className="hero-orbit hero-orbit-left" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-right" aria-hidden="true" />
        <div className="hero-copy">
          <Image className="hero-logo" src="/logos/enchanted-artistry-transparent.png" alt="Enchanted Artistry CC" width={800} height={342} priority />
          <p className="service-signature">Cosmetology <span>✦</span> Creativity <span>✦</span> Mentorship, guidance &amp; coaching</p>
          <p className="hero-tagline">Creating beauty. Inspiring purpose. Cultivating hope.</p>
          <a className="button" href="#services">Explore our world</a>
        </div>

        <div className="hero-story">
          <div className="founder-duet" aria-label="Chané and Anthea, Enchanted Artistry co-founders">
            <figure className="duet-frame duet-chane">
              <Image className="duet-image duet-image-mirrored" src="/founders/chane-creative.webp" alt="Chané, co-founder of Enchanted Artistry" fill sizes="(max-width: 700px) 50vw, 280px" priority />
            </figure>
            <figure className="duet-frame duet-anthea">
              <Image className="duet-image" src="/founders/anthea-sunset.webp" alt="Anthea Feris, co-founder of Enchanted Artistry" fill sizes="(max-width: 700px) 50vw, 280px" priority />
            </figure>
          </div>
          <div className="hero-story-copy">
            <p className="eyebrow">More than a brand</p>
            <h1>It&apos;s a calling.</h1>
            <p>We bring cosmetology, creativity and caring guidance together in a welcoming space for women, with particular care for expectant and new mothers.</p>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we offer</p>
          <h2>Our services</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title} style={{ "--card-index": index } as CSSProperties}>
              <Image src={service.image} alt={service.alt} width={540} height={380} sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 20vw" />
              <div className="service-card-copy">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <a href="#contact">Enquire</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div>
          <p className="eyebrow">Our story</p>
          <h2>Beauty today.<br />Purpose for tomorrow.</h2>
        </div>
        <p>Enchanted Artistry is a home for beauty, creativity and meaningful encouragement. It begins with considerate cosmetology and grows into guidance for mothers, creative expression and purposeful community work.</p>
      </section>

      <section className="team section" id="founders">
        <div className="section-heading">
          <p className="eyebrow">The people behind Enchanted</p>
          <h2>Meet the founders</h2>
        </div>
        <div className="team-grid">
          <article className="founder-card founder-card-chane">
            <Image src="/founders/chane-creative.webp" alt="Chané, Enchanted Artistry co-founder" width={1200} height={1200} sizes="(max-width: 760px) 92vw, 45vw" />
            <div>
              <p className="eyebrow">Co-founder</p>
              <h3>Chané Yvette Philander</h3>
              <p className="founder-role">The Creative.</p>
              <p>Chané shapes the creative spirit of Enchanted, bringing ideas to life through meaningful expression and care.</p>
            </div>
          </article>
          <article className="founder-card founder-card-anthea">
            <Image src="/founders/anthea-sunset.webp" alt="Anthea Feris, Enchanted Artistry co-founder" width={1200} height={1200} sizes="(max-width: 760px) 92vw, 45vw" />
            <div>
              <p className="eyebrow">Co-founder</p>
              <h3>Anthea Feris</h3>
              <p className="founder-role">Care with purpose.</p>
              <p>Anthea brings a thoughtful, people-centred vision to Enchanted, creating room for beauty, guidance and encouragement.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Join the Enchanted family</p>
          <h2>Let&apos;s create something meaningful.</h2>
          <p>For beauty enquiries, guidance and creative collaborations, get in touch with the Enchanted Artistry team.</p>
        </div>
        <a className="button button-light" href="mailto:heyitschane@outlook.com?subject=Enchanted%20Artistry%20enquiry">Send an enquiry</a>
      </section>

      <footer>
        <Image src="/logos/enchanted-artistry-transparent.png" alt="Enchanted Artistry CC" width={370} height={158} />
        <div>
          <p className="eyebrow">Quick links</p>
          <a href="#about">About us</a><a href="#services">Services</a><a href="#story">Our story</a><a href="#founders">Founders</a>
        </div>
        <div>
          <p className="eyebrow">Connect with us</p>
          <a href="mailto:heyitschane@outlook.com">heyitschane@outlook.com</a>
          <p>Windhoek, Namibia</p>
        </div>
        <div className="footer-verse">Let your light shine<br /><span>before others.</span></div>
        <p className="footer-bottom">© 2026 Enchanted Artistry CC <a href="https://studio.tangison.com">Made by Tangison Studio</a></p>
      </footer>
    </main>
  );
}
