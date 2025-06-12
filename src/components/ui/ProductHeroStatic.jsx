import Image from "next/image";

export default function ProductHeroStatic({ src, alt }) {
  if (!src) return null;
  return (
    <div style={{ position: "relative", aspectRatio: "4/3", width: "100%" }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1200px"
        priority
        fetchPriority="high"
        quality={75}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
} 