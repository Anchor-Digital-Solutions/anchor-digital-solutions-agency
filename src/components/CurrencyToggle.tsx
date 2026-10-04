import { useCurrency } from "@/lib/currency";

export function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      role="group"
      aria-label="Select pricing currency"
      className="inline-flex items-center gap-1 rounded-md border border-border p-1"
    >
      {(["USD", "KES"] as const).map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setCurrency(c)}
          aria-pressed={currency === c}
          className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
            currency === c
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent"
          }`}
        >
          {c === "USD" ? "USD ($)" : "KES (KSh)"}
        </button>
      ))}
    </div>
  );
}
