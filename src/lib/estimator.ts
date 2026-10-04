export type Range = { min: number; max: number };
export type Money = { USD: Range; KES: Range };

export type EstimatorService = {
  id: string;
  label: string;
  base: Money;
  monthly?: boolean;
};

export type EstimatorAddon = { id: string; label: string; price: Money; monthly?: boolean };

export const ESTIMATOR_SERVICES: EstimatorService[] = [
  { id: "web", label: "Website Design & Development", base: { USD: { min: 300, max: 1200 }, KES: { min: 25000, max: 55000 } } },
  { id: "marketing", label: "Strategic Digital Marketing", monthly: true, base: { USD: { min: 400, max: 900 }, KES: { min: 25000, max: 60000 } } },
  { id: "ai", label: "AI Automations & AI Agents", base: { USD: { min: 500, max: 1200 }, KES: { min: 30000, max: 100000 } } },
  { id: "maintenance", label: "Website & System Maintenance", monthly: true, base: { USD: { min: 50, max: 250 }, KES: { min: 5000, max: 25000 } } },
];

export const ESTIMATOR_ADDONS: EstimatorAddon[] = [
  { id: "mpesa", label: "M-Pesa Integration", price: { USD: { min: 100, max: 200 }, KES: { min: 10000, max: 20000 } } },
  { id: "stripe", label: "Stripe / PayPal Gateways", price: { USD: { min: 100, max: 200 }, KES: { min: 10000, max: 20000 } } },
  { id: "whatsapp", label: "WhatsApp API Bot", price: { USD: { min: 200, max: 400 }, KES: { min: 15000, max: 35000 } } },
  { id: "crm", label: "CRM Lead Routing", price: { USD: { min: 150, max: 300 }, KES: { min: 10000, max: 25000 } } },
  { id: "ga4", label: "GA4 / GTM Tracking", price: { USD: { min: 80, max: 150 }, KES: { min: 7000, max: 15000 } } },
  { id: "retainer", label: "Monthly Maintenance Retainer", monthly: true, price: { USD: { min: 50, max: 120 }, KES: { min: 5000, max: 12000 } } },
];

export function formatMoney(n: number, cur: "USD" | "KES") {
  return cur === "USD" ? `$${n.toLocaleString("en-US")}` : `KSh ${n.toLocaleString("en-US")}`;
}

export function estimate(serviceId: string, addonIds: string[]) {
  const svc = ESTIMATOR_SERVICES.find((s) => s.id === serviceId)!;
  const zero = () => ({ USD: { min: 0, max: 0 }, KES: { min: 0, max: 0 } });
  const oneOff: Money = zero();
  const monthly: Money = zero();
  const add = (bucket: Money, m: Money) => {
    for (const c of ["USD", "KES"] as const) {
      bucket[c].min += m[c].min;
      bucket[c].max += m[c].max;
    }
  };
  add(svc.monthly ? monthly : oneOff, svc.base);
  for (const a of ESTIMATOR_ADDONS.filter((x) => addonIds.includes(x.id))) add(a.monthly ? monthly : oneOff, a.price);
  return { service: svc, oneOff, monthly };
}

export function rangeText(r: Range, cur: "USD" | "KES") {
  return `${formatMoney(r.min, cur)} – ${formatMoney(r.max, cur)}`;
}
