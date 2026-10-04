import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { BUSINESS_EMAIL, SERVICES, SOCIAL_LINKS } from "@/lib/content";
import { BrandLogo } from "./BrandLogo";

const SOCIALS = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: Linkedin },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: Instagram },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-lg border border-border p-8">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">LET'S CONNECT</p>
          <h2 className="mt-2 text-2xl font-bold">Let's build the system that grows your business.</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Tell us where leads are leaking and where your team is losing hours. We'll map the fix on a free
            15-minute strategy call.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Book a Free Strategy Call
          </Link>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" aria-label="Anchor Digital Solutions home" className="inline-flex text-foreground">
              <BrandLogo className="h-auto w-44 max-w-full" />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Websites, marketing and AI automation systems for growing businesses.
            </p>
            <a href={`mailto:${BUSINESS_EMAIL}`} className="mt-4 block text-sm underline">
              {BUSINESS_EMAIL}
            </a>
            <div className="mt-4 flex gap-4">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/services">All Services</Link></li>
              {SERVICES.map((s) => (
                <li key={s.path}>
                  <Link to={s.path}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Find Us</h3>
            <address className="mt-2 space-y-2 text-sm not-italic text-muted-foreground">
              <p>Nairobi, Kenya</p>
              <p><a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-foreground">{BUSINESS_EMAIL}</a></p>
              <p>Mon–Fri: 8:00 AM – 6:00 PM EAT</p>
            </address>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          © 2026 Anchor Digital Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
