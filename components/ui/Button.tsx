import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-maroon text-cream shadow-[0_10px_30px_-12px_rgba(122,31,43,0.7)] hover:bg-maroon-dark hover:-translate-y-0.5",
  secondary:
    "bg-gold text-ink shadow-[0_10px_30px_-14px_rgba(184,134,59,0.9)] hover:bg-gold-dark hover:text-cream hover:-translate-y-0.5",
  outline:
    "border border-gold/60 text-brown hover:bg-gold hover:text-cream hover:border-gold",
  ghost: "text-brown hover:text-maroon",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base py-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props as ButtonAsLink;
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
