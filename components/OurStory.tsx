"use client";

import { useState } from "react";

export default function OurStory() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="our-story-block">
      <p className="eyebrow">Our Story</p>
      <p>Some friendships are formed by chance, while others feel beautifully orchestrated. The friendship between Anthea and Chané is one of those stories.</p>

      <div className={`our-story-expandable ${expanded ? "is-expanded" : "is-collapsed"}`} aria-hidden={!expanded}>
        <div className="our-story-expandable-inner">
          <p>When their paths crossed, it didn&apos;t take long for them to realise how much they had in common. Beyond their shared love for beauty and creativity was something far more meaningful, a genuine passion for people. Both believed that true beauty begins within and that every person deserves to feel seen, valued, and empowered.</p>
          <p>As their friendship deepened, so did their conversations, dreams, and faith. They discovered that they shared a sensitivity to God&apos;s voice, often finding themselves encouraged in the same seasons, inspired by the same vision, and gently led toward the same purpose. What began as friendship soon became a shared calling.</p>
          <p>Recognising how naturally their gifts complemented one another, Anthea and Chané envisioned a place where artistry could meet purpose, where creativity could inspire hope, and where beauty could be used to uplift and restore confidence. Together, they founded Enchanted Artistry CC, not simply as a business, but as a reflection of their hearts and their desire to honour God through the work of their hands.</p>
          <p>Today, Enchanted Artistry CC stands as more than a creative brand. It is a space where beauty, mentorship, creativity, and faith come together to encourage others to discover their God-given gifts, embrace their unique identity, and flourish with confidence and purpose.</p>
        </div>
      </div>

      <button
        type="button"
        className="our-story-toggle"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}
