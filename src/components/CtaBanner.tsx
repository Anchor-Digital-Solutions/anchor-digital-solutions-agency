import { Link } from "@tanstack/react-router";

export function CtaBanner({
  headline = "Ready to scale your business together?",
  buttonLabel = "Book a Free Strategy Call",
}: {
  headline?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="my-16 rounded-lg border border-border p-10 text-center">
      <h2 className="text-3xl font-bold">{headline}</h2>
      <Link
        to="/contact"
        className="mt-6 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
