import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { CurrencyToggle } from "./CurrencyToggle";
import { BrandLogo } from "./BrandLogo";
import { SERVICES } from "@/lib/content";

const NAV = [
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSvcOpen(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!svcOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!dropRef.current?.contains(e.target as Node)) setSvcOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSvcOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [svcOpen]);

  const bookCall = () => {
    setOpen(false);
    navigate({ to: "/contact", hash: "contact-form" });
  };

  const servicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          to="/"
          aria-label="Anchor Digital Solutions home"
          className="flex shrink-0 items-center text-foreground"
        >
          <BrandLogo compact className="h-9 w-9 md:hidden" />
          <span className="hidden items-center gap-2 md:flex">
            <BrandLogo compact className="h-9 w-9" />
            <span className="font-bold tracking-tight">Anchor Digital Solutions</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "font-semibold underline" }} className="text-sm">
            Home
          </Link>
          <div
            ref={dropRef}
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button
              type="button"
              aria-expanded={svcOpen}
              aria-haspopup="true"
              aria-controls="services-menu"
              onClick={() => setSvcOpen((o) => !o)}
              className={`text-sm ${servicesActive ? "font-semibold underline" : ""}`}
            >
              Services ▾
            </button>
            {svcOpen && (
              <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2">
                <div id="services-menu" className="rounded-md border border-border bg-popover p-2 text-popover-foreground shadow-lg">
                  <Link to="/services" activeOptions={{ exact: true }} activeProps={{ className: "font-semibold" }} className="block rounded px-3 py-2 text-sm hover:bg-accent">
                    All Services
                  </Link>
                  <div className="my-1 border-t border-border" />
                  {SERVICES.map((s) => (
                    <Link key={s.path} to={s.path} activeProps={{ className: "font-semibold bg-accent" }} className="block rounded px-3 py-2 text-sm hover:bg-accent">
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: "font-semibold underline" }} className="text-sm">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CurrencyToggle />
          <button type="button" onClick={bookCall} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Book a Free Call
          </button>
        </div>

        <button
          type="button"
          className="rounded-md border border-border px-3 py-2 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="max-h-[80vh] overflow-y-auto border-t border-border px-4 py-4 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-3">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "font-semibold" }}>
              Home
            </Link>
            <Link to="/services" activeOptions={{ exact: true }} activeProps={{ className: "font-semibold" }}>
              Services
            </Link>
            <div className="border-l border-border pl-4">
              {SERVICES.map((s) => (
                <Link key={s.path} to={s.path} activeProps={{ className: "font-semibold text-foreground" }} className="block py-1 text-sm text-muted-foreground">
                  {s.title}
                </Link>
              ))}
            </div>
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} activeProps={{ className: "font-semibold" }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <CurrencyToggle />
            <button type="button" onClick={bookCall} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              Book a Free Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
