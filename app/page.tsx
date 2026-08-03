import Image from "next/image";
import FounderPortrait from "../components/FounderPortrait";
import Header from "../components/Header";
import MotionController from "../components/MotionController";

const services = [
  { title: "Makeup", copy: "Beauty looks created with care for your special moments.", image: "/images/service-makeup.webp", alt: "Makeup brushes and cosmetics" },
  { title: "Hair", copy: "Styling that lets your confidence come through.", image: "/images/service-hair.webp", alt: "Styled hair" },
  { title: "Drama coaching", copy: "A creative space for expression, confidence and performance.", image: "/images/service-drama.webp", alt: "Theatre masks on silk" },
  { title: "Guidance", copy: "Guiding mothers through pregnancy, post-partum and breastfeeding.", image: "/images/service-mentorship.webp", alt: "Notebook and pen" },
  { title: "Content creation", copy: "Creative content, design and meaningful storytelling.", image: "/images/service-content.webp", alt: "Content creation tools" },
];

export default function Home() {
  return (
    <main id="top">
      <MotionController />
      <Header />

      <section className="hero" id="about">
        <div className="hero-copy-stack">
          <div className="hero-brand hero-reveal">
            <Image
              className="hero-brand-logo"
              src="/logos/enchanted-artistry-corrected.png"
              alt="Enchanted Artistry CC. Cosmetology, Arts, Mentorship and Guidance."
              width={740}
              height={482}
              sizes="(max-width: 860px) 92vw, 44vw"
              priority
            />
            <p className="hero-tagline">Creating beauty. Inspiring purpose.<br />Cultivating hope.</p>
            <p className="hero-intro">Today, Enchanted Artistry CC stands as more than a creative brand. It is a space where beauty, mentorship, creativity, and faith come together to encourage others to discover their God-given gifts, embrace their unique identity, and flourish with confidence and purpose.</p>
            <a className="button" href="#services">Explore our world</a>
          </div>

          <div className="hero-message hero-reveal hero-reveal-mid">
            <p className="eyebrow">More than a brand</p>
            <h1>It&apos;s a calling.</h1>
            <div className="heart-rule" aria-hidden="true"><span>♥</span></div>
          </div>
        </div>

        <div className="hero-founders hero-reveal hero-reveal-late">
          <span className="hero-orbit" aria-hidden="true" />
          <Image
            className="hero-founders-image"
            src="/images/founders-hero-cutout.webp"
            alt="Chané Yvette Philander and Anthea Feris, co-founders of Enchanted Artistry"
            width={770}
            height={954}
            sizes="(max-width: 860px) 92vw, 52vw"
            priority
          />
        </div>
      </section>

      <section className="story-strip" id="story" data-reveal>
        <div>
          <p className="eyebrow">Our story</p>
          <h2>Beauty today. Purpose for tomorrow.</h2>
        </div>
        <p>Enchanted Artistry is a home for beauty, creativity and meaningful encouragement. It begins with considerate cosmetology and grows into guidance for mothers, creative expression and purposeful community work.</p>
      </section>

      <section className="services section" id="services">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">What we offer</p>
          <h2><span aria-hidden="true">✦</span> Our services <span aria-hidden="true">✦</span></h2>
          <div className="heart-rule heart-rule-small" aria-hidden="true"><span>♥</span></div>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title} data-reveal style={{ transitionDelay: `${index * 65}ms` }}>
              <div className="service-image-wrap">
                <Image src={service.image} alt={service.alt} width={540} height={380} sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 20vw" />
              </div>
              <div className="service-card-copy">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <a href="#contact">Enquire</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="team section" id="founders">
        <div className="section-heading" data-reveal>
          <h2><span aria-hidden="true">✦</span> Meet the founders <span aria-hidden="true">✦</span></h2>
          <div className="heart-rule heart-rule-small" aria-hidden="true"><span>♥</span></div>
        </div>
        <div className="team-grid">
          <article className="founder-card" data-reveal>
            <FounderPortrait
              name="Chané Yvette Philander"
              variant="chane"
              primarySrc="/founders/chane-creative.webp"
              primaryAlt="Chané Yvette Philander in a black-and-white creative portrait"
              alternateSrc="/founders/chane-yvette-philander-960.webp"
              alternateAlt="Chané Yvette Philander, Enchanted Artistry co-founder"
            />
            <div className="founder-copy">
              <p className="eyebrow">Co-founder</p>
              <h3>Chané Yvette<br />Philander</h3>
              <p className="founder-role">The Creative.</p>
              <p>Chané shapes the creative spirit of Enchanted, bringing ideas to life through meaningful expression and care.</p>
            </div>
          </article>

          <article className="founder-card" data-reveal>
            <FounderPortrait
              name="Anthea Feris"
              variant="anthea"
              primarySrc="/founders/anthea-sunset.webp"
              primaryAlt="Anthea Feris outdoors at sunset"
              alternateSrc="/founders/anthea-jade-feris-960.webp"
              alternateAlt="Anthea Feris, Enchanted Artistry co-founder"
            />
            <div className="founder-copy">
              <p className="eyebrow">Co-founder</p>
              <h3>Anthea Feris</h3>
              <p className="founder-role">Care with purpose.</p>
              <p>Anthea brings a thoughtful, people-centred vision to Enchanted, creating room for beauty, guidance and encouragement.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-strip" id="contact" data-reveal>
        <div className="contact-icon" aria-hidden="true">✉</div>
        <div>
          <p className="eyebrow">Join the Enchanted family</p>
          <h2>Beauty enquiries, guidance and creative collaborations.</h2>
        </div>
        <a className="button" href="mailto:heyitschane@outlook.com?subject=Enchanted%20Artistry%20enquiry">Send an enquiry</a>
      </section>

      <footer>
        <div className="footer-brand">
          <Image src="/logos/enchanted-artistry-corrected.png" alt="Enchanted Artistry CC" width={370} height={241} />
          <p>Cosmetology · Arts · Mentorship and Guidance</p>
        </div>
        <div>
          <p className="eyebrow">Quick links</p>
          <a href="#about">About us</a><a href="#services">Services</a><a href="#story">Our story</a><a href="#founders">Founders</a>
        </div>
        <div>
          <p className="eyebrow">Connect with us</p>
          <a href="mailto:heyitschane@outlook.com">heyitschane@outlook.com</a>
          <a href="https://wa.me/264816700844" target="_blank" rel="noreferrer">WhatsApp Anthea: +264 81 670 0844</a>
          <a href="https://wa.me/264816034637" target="_blank" rel="noreferrer">WhatsApp Chané: +264 81 603 4637</a>
          <p>Windhoek, Namibia</p>
        </div>
        <div className="footer-verse">Let your light shine<br /><span>before others.</span><small>Matthew 5:16</small></div>
        <div className="footer-bottom"><span>© 2026 Enchanted Artistry CC</span><a href="https://studio.tangison.com">Made by Tangison Studio</a></div>
      </footer>
    </main>
  );
}
