import type { ReactNode } from "react";

export function Page({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>;
}

export function PageHero({
  tag,
  title,
  subtitle,
  children,
  before,
}: {
  before?: ReactNode;
  tag?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="py-10">
      {before && <div className="mb-6">{before}</div>}
      {tag && <p className="text-xs font-semibold tracking-widest text-muted-foreground">{tag}</p>}
      <h1 className="mt-2 text-4xl font-bold tracking-tight">{title}</h1>
      {subtitle && <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{subtitle}</p>}
      {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
    </section>
  );
}
