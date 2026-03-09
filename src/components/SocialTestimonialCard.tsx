import { AtSign } from "lucide-react";

type SocialTestimonialCardProps = {
  quote: string;
  name: string;
  role?: string;
  className?: string;
};

const SocialTestimonialCard = ({ quote, name, role, className = "" }: SocialTestimonialCardProps) => {
  const cleanName = name.replace(/[.,]/g, "");
  const parts = cleanName.split(" ").filter(Boolean);
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
  const handle = `@${parts.join("").toLowerCase()}`;

  return (
    <article
      className={`rounded-[22px] bg-background border border-border p-6 md:p-7 min-h-[360px] flex flex-col shadow-[0_8px_30px_rgba(2,6,23,0.06)] ${className}`}
    >
      <div className="mb-6">
        <div className="flex items-start gap-3">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground text-sm font-bold">
            {initials}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg md:text-xl font-heading font-bold text-foreground leading-tight break-words">
              {name}
            </h3>
            {role ? <p className="text-sm md:text-base text-muted-foreground">{role}</p> : null}
          </div>
        </div>
        <span className="mt-3 inline-flex max-w-full items-center gap-1.5 text-xs md:text-sm text-muted-foreground bg-muted px-2.5 py-1 rounded-full whitespace-nowrap">
          <AtSign size={14} />
          <span className="truncate">{handle}</span>
        </span>
      </div>

      <p className="text-base md:text-lg leading-relaxed text-foreground/95 flex-1">&quot;{quote}&quot;</p>

      <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
        <span className="text-xs md:text-sm text-muted-foreground">Verified Client</span>
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
      </div>
    </article>
  );
};

export default SocialTestimonialCard;
