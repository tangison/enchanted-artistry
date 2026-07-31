import Image from "next/image";
import Header from "@/components/Header";

const services = [
  {
    title: "Makeup",
    copy: "Bridal, special occasions and confidence-led beauty.",
    image: "/images/service-makeup.webp",
    alt: "Makeup brushes and cosmetics arranged on blush fabric",
  },
  {
    title: "Hair",
    copy: "Styling, treatments and thoughtful transformation.",
    image: "/images/service-hair.webp",
    alt: "Long styled waves viewed from behind in a beauty studio",
  },
  {
    title: "Drama coaching",
    copy: "Confidence, expression, acting and performance.",
    image: "/images/service-drama.webp",
    alt: "White theatre masks resting on rose-coloured fabric",
  },
  {
    title: "Mentorship",
    copy: "Personal growth, purpose and practical encouragement.",
    image: "/images/service-mentorship.webp",
    alt: "Open notebook and pen arranged on soft blush fabric",
  },
  {
    title: "Content creation",
    copy: "Photography, video, design and meaningful storytelling.",
    image: "/images/service-content.webp",
    alt: "Camera and microphone arranged for content creation",
  },
];

function ValueIcon({ type }: { type: "faith" | "purpose" | "creative" | "love" }) {
  if (type === "faith") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M20 5h8v12h10v8H28v18h-8V25H10v-8h10z" /></svg>;
  }
  if (type === "purpose") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m8 16 10 9 6-17 7 17 9-9-4 23H12z" /><path d="M13 35h23M18 27h12" /></svg>;
  }
  if (type === "creative") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 4v9M24 35v9M4 24h9M35 24h9M10 10l7 7M31 31l7 7M38 10l-7 7M17 31l-7 7" /><path d="m24 14 3 7 7 3-7 3-3 7-3-7-7-3 7-3z" /></svg>;
  }
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 41S7 31 7 18c0-7 9-11 17-2 8-9 17-5 17 2 0 13-17 23-17 23z" /></svg>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <Header />
        <div className="hero-inner">
          <div className="hero-brand">
            <Image
              className="hero-logo"
              src="/logos/enchanted-artistry-transparent.png"
              alt="Enchanted Artistry CC — Mentorship, Cosmetology, Creativity, Arts"
              width={1288}
              height={840}
              priority
            />
            <p className="script hero-tagline">Creating beauty. Inspiring purpose. Cultivating hope.</p>
            <a className="button" href="#services">Explore our world</a>
          </div>
          <div className="hero-story" id="about">
            <p className="eyebrow">More than a brand</p>
            <h1 className="script">It&apos;s a calling.</h1>
            <div className="heart-rule"><span>♥</span></div>
            <p>
              We are dreamers, creators and purpose-driven women who believe in unlocking potential,
              nurturing confidence and creating spaces where creativity and faith come together.
            </p>
          </div>
        </div>
      </section>

      <section className="values" aria-label="Our values">
        <article><ValueIcon type="faith" /><div><h2>Faith based</h2><p>Everything we do is rooted in faith.</p></div></article>
        <article><ValueIcon type="purpose" /><div><h2>Purpose driven</h2><p>We help people discover their God-given gifts.</p></div></article>
        <article><ValueIcon type="creative" /><div><h2>Creatively inspired</h2><p>We believe creativity changes lives.</p></div></article>
        <article><ValueIcon type="love" /><div><h2>Made with love</h2><p>Passion, excellence and care in every detail.</p></div></article>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we offer</p>
          <h2><span>✦</span> Our services <span>✦</span></h2>
          <i aria-hidden="true">♥</i>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <Image src={service.image} alt={service.alt} width={720} height={540} />
              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <a href="#contact">Enquire</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vision-section" id="vision">
        <div className="vision-inner">
          <p className="eyebrow">One umbrella. Many possibilities.</p>
          <h2>Beauty today. Purpose for tomorrow.</h2>
          <p>
            Enchanted is the umbrella brand for purpose-driven ventures that inspire confidence,
            creativity and meaningful community impact. It begins with quality beauty experiences and
            grows toward mentorship, creative arts, content creation and youth development.
          </p>
          <div className="vision-pillars">
            <span>Excellence</span><span>Authenticity</span><span>Empowerment</span><span>Heartfelt service</span>
          </div>
        </div>
      </section>

      <section className="section team-section" id="team">
        <div className="section-heading">
          <p className="eyebrow">The women behind the vision</p>
          <h2><span>✦</span> Meet the founders <span>✦</span></h2>
          <i aria-hidden="true">♥</i>
        </div>
        <div className="team-grid">
          <article className="founder-card founder-chane">
            <div className="founder-photo">
              <Image src="/founders/chane-yvette-philander-960.webp" alt="Chané Yvette Philander, co-founder of Enchanted Artistry" width={960} height={1436} loading="eager" />
              <span>Brings creativity<br />to life ♥</span>
            </div>
            <div className="founder-copy">
              <h3>Chané Yvette<br />Philander</h3>
              <p className="role">Co-founder</p>
              <p className="script founder-title">The Creative One.</p>
              <p>A creative soul with a gift for connection and expression. Chané brings heart, vision and a deep commitment to bringing ideas to life through creativity that inspires and transforms.</p>
              <p className="script signoff">Creator. Visionary. Dreamer.</p>
            </div>
          </article>
          <article className="founder-card founder-anthea">
            <div className="founder-photo">
              <Image src="/founders/anthea-jade-feris-960.webp" alt="Anthea Jade Feris, co-founder of Enchanted Artistry" width={960} height={1441} loading="eager" />
              <span>Leads with purpose<br />&amp; vision ♥</span>
            </div>
            <div className="founder-copy">
              <h3>Anthea Jade<br />Feris</h3>
              <p className="role">Co-founder</p>
              <p className="script founder-title">Heart for people.</p>
              <p>A visionary leader with a heart for people and purpose. Anthea brings strategy and a passion for empowering others to everything Enchanted Artistry stands for.</p>
              <p className="script signoff">Leader. Encourager. Visionary.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="newsletter" id="contact">
        <div className="newsletter-icon" aria-hidden="true">✉</div>
        <div>
          <p className="eyebrow">Join the Enchanted family</p>
          <p>Connect with us for beauty enquiries, creative collaborations and future updates.</p>
        </div>
        <a className="button" href="mailto:heyitschane@outlook.com?subject=Enchanted%20Artistry%20enquiry">Send an enquiry</a>
      </section>

      <footer>
        <div className="footer-main">
          <Image src="/logos/enchanted-artistry-transparent.png" alt="Enchanted Artistry CC" width={1288} height={840} />
          <div>
            <p className="footer-heading">Quick links</p>
            <div className="footer-links"><a href="#about">About us</a><a href="#services">Services</a><a href="#vision">Our vision</a><a href="#team">Founders</a></div>
          </div>
          <div>
            <p className="footer-heading">Connect with us</p>
            <a href="mailto:heyitschane@outlook.com">heyitschane@outlook.com</a>
            <p>Windhoek, Namibia</p>
          </div>
          <blockquote><span className="script">Let your light shine<br />before others.</span><cite>Matthew 5:16</cite></blockquote>
        </div>
        <div className="footer-bottom"><span>© 2026 Enchanted Artistry CC</span><span>Demo landing page — enquiries by email</span></div>
      </footer>
    </main>
  );
}
