"use client";

import Image from "next/image";
import { useState } from "react";

type FounderPortraitProps = {
  alternateAlt: string;
  alternateSrc: string;
  name: string;
  primaryAlt: string;
  primarySrc: string;
  variant: "anthea" | "chane";
};

export default function FounderPortrait({
  alternateAlt,
  alternateSrc,
  name,
  primaryAlt,
  primarySrc,
  variant,
}: FounderPortraitProps) {
  const [showAlternate, setShowAlternate] = useState(false);

  return (
    <button
      className={`founder-portrait founder-image founder-image-${variant}${showAlternate ? " is-alternate" : ""}`}
      type="button"
      aria-pressed={showAlternate}
      aria-label={showAlternate ? `Show the primary portrait of ${name}` : `Show another portrait of ${name}`}
      onClick={() => setShowAlternate((value) => !value)}
    >
      <Image className="founder-portrait-primary" src={primarySrc} alt={primaryAlt} fill sizes="(max-width: 760px) 92vw, 26vw" />
      <Image className="founder-portrait-alternate" src={alternateSrc} alt={alternateAlt} fill sizes="(max-width: 760px) 92vw, 26vw" />
      <span className="founder-portrait-label" aria-hidden="true">{showAlternate ? "View featured portrait" : "View studio portrait"}</span>
    </button>
  );
}
