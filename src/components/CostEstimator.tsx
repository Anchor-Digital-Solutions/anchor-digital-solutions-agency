import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CurrencyToggle } from "./CurrencyToggle";
import { useCurrency } from "@/lib/currency";
import { ESTIMATOR_ADDONS, ESTIMATOR_SERVICES, estimate, rangeText, type Money } from "@/lib/estimator";

function hasAmount(m: Money) {
  return m.USD.max > 0;
}

export function CostEstimator() {
  const { currency } = useCurrency();
  const other = currency === "USD" ? "KES" : "USD";
  const navigate = useNavigate();
  const [serviceId, setServiceId] = useState(ESTIMATOR_SERVICES[0]!.id);
  const [addons, setAddons] = useState<string[]>([]);
  const result = estimate(serviceId, addons);

  const toggleAddon = (id: string) =>
    setAddons((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  const lines = (cur: "USD" | "KES") =>
    [
      hasAmount(result.oneOff) && `${rangeText(result.oneOff[cur], cur)} one-off`,
      hasAmount(result.monthly) && `${rangeText(result.monthly[cur], cur)} /month`,
    ].filter(Boolean) as string[];

  const bookScope = () => {
    const addonLabels = ESTIMATOR_ADDONS.filter((a) => addons.includes(a.id)).map((a) => a.label);
    navigate({
      to: "/contact",
      hash: "contact-form",
      search: {
        service: result.service.label,
        scope: addonLabels.length ? addonLabels.join(", ") : "No add-ons",
        estimate: `${lines("USD").join(" + ")} | ${lines("KES").join(" + ")}`,
      },
    });
  };

  const step = "text-xs font-semibold tracking-widest text-muted-foreground";
  const choice = (active: boolean) =>
    `rounded-md border px-4 py-3 text-left text-sm transition-colors ${
      active ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-accent"
    }`;

  return (
    <section id="estimator" className="mt-16 scroll-mt-24 rounded-lg border border-border p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className={step}>COST & SCOPE ESTIMATOR</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">Estimate your project in 30 seconds.</h2>
        </div>
        <CurrencyToggle />
      </div>

      <div className="mt-8">
        <p className={step}>STEP 1 — PRIMARY SERVICE</p>
        <div role="radiogroup" className="mt-3 grid gap-3 sm:grid-cols-2">
          {ESTIMATOR_SERVICES.map((s) => (
            <button key={s.id} type="button" role="radio" aria-checked={serviceId === s.id} onClick={() => setServiceId(s.id)} className={choice(serviceId === s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className={step}>STEP 2 — ADD-ONS & INTEGRATIONS</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ESTIMATOR_ADDONS.map((a) => (
            <button key={a.id} type="button" aria-pressed={addons.includes(a.id)} onClick={() => toggleAddon(a.id)} className={choice(addons.includes(a.id))}>
              {addons.includes(a.id) ? "✓ " : "+ "}
              {a.label}
              {a.monthly && <span className="opacity-70"> (monthly)</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-md bg-muted p-6" aria-live="polite">
        <p className={step}>STEP 3 — ESTIMATED RANGE</p>
        <div className="mt-3 space-y-1 text-2xl font-bold">
          {lines(currency).map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">≈ {lines(other).join(" + ")}</p>
        <p className="mt-2 text-xs text-muted-foreground">Indicative only. Final pricing is confirmed after a free scoping call.</p>
      </div>

      <div className="mt-6">
        <p className={step}>STEP 4</p>
        <button type="button" onClick={bookScope} className="mt-3 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Book This Scope →
        </button>
      </div>
    </section>
  );
}
