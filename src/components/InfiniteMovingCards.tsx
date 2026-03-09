import { useMemo, useState, type CSSProperties } from "react";

type InfiniteMovingCardItem = {
  id: string;
  title: string;
  desc: string;
};

type InfiniteMovingCardsProps = {
  items: InfiniteMovingCardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

const speedToDuration = {
  fast: 26,
  normal: 34,
  slow: 42,
} as const;

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className = "",
}: InfiniteMovingCardsProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const loopItems = useMemo(() => [...items, ...items], [items]);

  if (!items.length) return null;

  const animationStyle: CSSProperties = {
    animationName: direction === "left" ? "infinite-cards-left" : "infinite-cards-right",
    animationDuration: `${speedToDuration[speed]}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationPlayState: pauseOnHover && isPaused ? "paused" : "running",
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max gap-5 py-2" style={animationStyle}>
        {loopItems.map((item, index) => (
          <article
            key={`${item.id}-${index}`}
            className="w-[300px] md:w-[360px] xl:w-[400px] shrink-0 rounded-[28px] border border-border bg-card px-6 py-7 md:px-7 md:py-8 shadow-card"
          >
            <div className="inline-flex h-10 min-w-10 px-3 rounded-md items-center justify-center bg-primary text-primary-foreground text-lg font-medium mb-5">
              {item.id}
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-foreground">
              {item.title}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
