import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[13px] font-semibold uppercase tracking-[0.16em] text-gray-400 ${className}`}>{children}</p>
  );
}

export function Heading({
  as: Tag = "h2",
  children,
  className = "",
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
}) {
  const size =
    Tag === "h1"
      ? "text-[2.6rem] leading-[1.08] sm:text-[3.5rem] lg:text-[4rem] lg:leading-[1.05]"
      : Tag === "h2"
        ? "text-[2rem] leading-tight sm:text-[2.75rem] sm:leading-[1.1]"
        : "text-xl leading-snug sm:text-2xl";
  return <Tag className={`font-display font-bold tracking-tightish ${size} ${className}`}>{children}</Tag>;
}

type ButtonProps = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  arrow?: boolean;
  className?: string;
};

export function Button({ to, children, variant = "primary", arrow = false, className = "" }: ButtonProps) {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-500",
    secondary: "border border-white/15 text-white hover:border-white/30 hover:bg-white/5",
    light: "bg-white text-gray-900 hover:bg-gray-200",
  }[variant];
  const cls = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg px-6 text-[15px] font-semibold transition ${styles} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  );
  if (/^(https?:|mailto:)/.test(to)) {
    return (
      <a href={to} className={cls}>
        {inner}
      </a>
    );
  }
  if (to.startsWith("#")) {
    return (
      <a href={to} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  );
}

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-ink-line">
      <Container className="pb-16 pt-16 sm:pb-20 sm:pt-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h1" className="mt-4 max-w-3xl">
          {title}
        </Heading>
        {children && <div className="mt-6 max-w-2xl text-lg leading-[1.6] text-gray-300">{children}</div>}
      </Container>
    </section>
  );
}

export function CtaBand({
  title = "Give your child the skills school doesn't teach.",
  text = "Book a free consultation. We'll answer your questions and help you pick the right first course.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-blue-600">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-[2.6rem] sm:leading-tight">{title}</h2>
          <p className="mt-3 text-lg text-blue-50">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button to="/schedule" variant="light">
            Schedule a free consultation
          </Button>
          <Button to="/pricing" variant="secondary" className="border-white/40 hover:bg-white/10">
            See pricing
          </Button>
        </div>
      </Container>
    </section>
  );
}
