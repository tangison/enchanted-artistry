"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Vision", "#vision"],
  ["Team", "#team"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand-link" href="#home" aria-label="Enchanted Artistry home">
        <Image
          src="/logos/enchanted-artistry-transparent.png"
          alt="Enchanted Artistry CC"
          width={1288}
          height={840}
          priority
        />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
        <span className="sr-only">Toggle navigation</span>
      </button>
      <nav id="site-navigation" className={open ? "nav-links is-open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="button button-small" href="#contact" onClick={() => setOpen(false)}>
          Enquire now
        </a>
      </nav>
    </header>
  );
}
