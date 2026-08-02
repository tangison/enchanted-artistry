"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Our story", "#story"],
  ["Founders", "#founders"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > 150 && current > previous);
      previous = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${hidden && !open ? " is-hidden" : ""}`}>
        <a className="brand-mark" href="#top" aria-label="Enchanted Artistry home">
          <Image
            src="/logos/enchanted-artistry-transparent.png"
            alt="Enchanted Artistry CC"
            width={330}
            height={141}
            priority
          />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-stroke menu-stroke-top" />
          <span className="menu-stroke menu-stroke-bottom" />
        </button>

        <nav id="primary-navigation" className={`nav-links${open ? " is-open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Send an enquiry
          </a>
        </nav>
      </header>
      {open ? <button className="nav-backdrop" type="button" aria-label="Close navigation" onClick={() => setOpen(false)} /> : null}
    </>
  );
}
