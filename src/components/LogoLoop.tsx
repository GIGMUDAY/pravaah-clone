import { useMemo, useState, type CSSProperties } from "react";

type LogoItem = {
  src: string;
  alt: string;
  href?: string;
  title?: string;
};

type LogoLoopProps = {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
};

const LogoLoop = ({
  logos,
  speed = 100,
  direction = "left",
  logoHeight = 60,
  gap = 56,
  hoverSpeed = 0,
  scaleOnHover = true,
  fadeOut = false,
  fadeOutColor = "hsl(var(--background))",
  ariaLabel = "Logo loop",
}: LogoLoopProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const activeSpeed = isHovered ? hoverSpeed : speed;
  const shouldPause = activeSpeed <= 0;

  const duration = useMemo(() => {
    const totalDistance = logos.length * (logoHeight + gap);
    return Math.max(totalDistance / Math.max(activeSpeed, 1), 8);
  }, [activeSpeed, gap, logoHeight, logos.length]);

  if (!logos.length) return null;

  const animationStyle: CSSProperties = {
    animationName: direction === "left" ? "logo-loop-left" : "logo-loop-right",
    animationDuration: `${duration}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationPlayState: shouldPause ? "paused" : "running",
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex w-max" style={animationStyle}>
        {[...logos, ...logos].map((logo, index) => {
          const item = (
            <div
              className={`rounded-2xl border border-border bg-card px-6 py-5 flex items-center gap-4 transition-transform ${
                scaleOnHover ? "hover:scale-[1.04]" : ""
              }`}
              style={{ marginRight: gap }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain"
                style={{ width: logoHeight, height: logoHeight }}
                loading="lazy"
              />
              <span className="text-lg md:text-xl font-medium text-foreground whitespace-nowrap">
                {logo.title ?? logo.alt}
              </span>
            </div>
          );

          return logo.href ? (
            <a
              key={`${logo.alt}-${index}`}
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {item}
            </a>
          ) : (
            <div key={`${logo.alt}-${index}`}>{item}</div>
          );
        })}
      </div>

      {fadeOut ? (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${fadeOutColor} 0%, transparent 12%, transparent 88%, ${fadeOutColor} 100%)`,
          }}
        />
      ) : null}
    </div>
  );
};

export default LogoLoop;
