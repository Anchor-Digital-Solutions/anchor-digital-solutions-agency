import { createContext, useContext, useState, type ReactNode } from "react";

export type Currency = "USD" | "KES";

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  toggle: () => void;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        toggle: () => setCurrency((c) => (c === "USD" ? "KES" : "USD")),
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside CurrencyProvider");
  return ctx;
}
