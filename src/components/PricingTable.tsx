import { Link } from "@tanstack/react-router";
import { formatPrice, type PricingTier } from "@/lib/content";
import { useCurrency } from "@/lib/currency";
import { CurrencyToggle } from "./CurrencyToggle";

export function PricingTable({ tiers }: { tiers: PricingTier[] }) {
  const { currency } = useCurrency();

  return (
    <section className="py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <CurrencyToggle />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className="flex flex-col rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <p className="mt-2 text-3xl font-bold" aria-live="polite">
              {formatPrice(tier.price, currency)}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
            <ul className="mt-4 flex-1 space-y-2 text-sm">
              {tier.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
