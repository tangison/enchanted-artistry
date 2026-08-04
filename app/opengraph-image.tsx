import { ImageResponse } from "next/og";

export const alt = "Enchanted Artistry CC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #fffaf8 0%, #f7e5ea 52%, #d8c5df 100%)",
          color: "#44393d",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ border: "2px solid #bd7478", borderRadius: "999px", height: "530px", opacity: 0.48, position: "absolute", right: "-62px", top: "-135px", width: "530px" }} />
        <div style={{ border: "1px solid #bd7478", borderRadius: "999px", height: "340px", opacity: 0.32, position: "absolute", right: "68px", top: "38px", width: "340px" }} />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "810px", position: "relative" }}>
          <div style={{ color: "#bd7478", fontSize: 24, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Cosmetology · Arts · Mentorship and Guidance</div>
          <div style={{ display: "flex", fontFamily: "serif", fontSize: 94, letterSpacing: "0.02em", lineHeight: 0.95, marginTop: 34 }}>Enchanted</div>
          <div style={{ display: "flex", fontFamily: "serif", fontSize: 51, letterSpacing: "0.26em", marginTop: 10, textTransform: "uppercase" }}>Artistry CC</div>
          <div style={{ background: "#bd7478", height: 2, marginTop: 48, width: 180 }} />
          <div style={{ display: "flex", fontSize: 32, fontStyle: "italic", marginTop: 32 }}>Creating beauty. Inspiring purpose. Cultivating hope.</div>
        </div>
      </div>
    ),
    size,
  );
}
