import type { Currency } from "./currency";

export type Price = { USD: string; KES: string };

export type PricingTier = {
  name: string;
  price: Price;
  description: string;
  features: string[];
};

export type ServiceContent = {
  slug: string;
  path:
    | "/services/web-development"
    | "/services/digital-marketing"
    | "/services/ai-automations"
    | "/services/maintenance";
  title: string;
  tagline: string;
  intro: string;
  included: string[];
  tiers: PricingTier[];
};

export function formatPrice(price: Price, currency: Currency) {
  return currency === "USD" ? price.USD : price.KES;
}

export const SERVICES: ServiceContent[] = [
  {
    slug: "web-development",
    path: "/services/web-development",
    title: "Website Design & Development",
    tagline: "Turning online visitors into qualified leads.",
    intro:
      "We design and engineer high-performance, mobile-first websites built around one goal: converting traffic into booked calls and paying clients, locally and internationally.",
    included: [
      "Custom UI/UX design and mobile-first responsive builds",
      "Speed optimization and performance tuning",
      "M-Pesa, Flutterwave, Stripe and PayPal integrations",
      "Technical SEO foundations",
      "Lead capture & WhatsApp integration",
    ],
    tiers: [
      {
        name: "Starter Landing Page",
        price: { USD: "$300", KES: "KSh 25,000" },
        description: "Single high-converting page with WhatsApp CTA.",
        features: [
          "Single high-converting page",
          "WhatsApp click-to-chat CTA",
          "Mobile-first responsive build",
          "Basic on-page SEO",
        ],
      },
      {
        name: "Growth Web System",
        price: { USD: "$500", KES: "KSh 35,000" },
        description: "4-6 custom pages with CRM & email sync.",
        features: [
          "4-6 custom designed pages",
          "CRM & email marketing sync",
          "Lead capture forms & automations",
          "Technical SEO + speed tuning",
        ],
      },
      {
        name: "Enterprise / E-Commerce",
        price: { USD: "$1,200+", KES: "KSh 55,000+" },
        description: "Full store or web app with custom logic.",
        features: [
          "Full store or web application",
          "Custom business logic & integrations",
          "Payments & inventory workflows",
          "Advanced analytics & tracking",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing",
    path: "/services/digital-marketing",
    title: "Strategic Digital Marketing",
    tagline: "Reach the right clients when they are ready to buy.",
    intro:
      "Campaigns engineered around intent, not impressions. We reach buyers when they are ready to act, then track and improve the path from first click to qualified lead.",
    included: [
      "High-intent Google & Meta campaigns",
      "Local SEO optimization",
      "GA4/GTM conversion tracking",
      "Content & brand positioning",
      "Conversion rate optimization (CRO)",
    ],
    tiers: [
      {
        name: "Campaign Kickstart",
        price: { USD: "$400 /month", KES: "KSh 25,000 /mo" },
        description: "1 platform, fully managed.",
        features: [
          "1 advertising platform",
          "Campaign setup & management",
          "Conversion tracking setup",
          "Monthly performance report",
        ],
      },
      {
        name: "Growth Marketing Retainer",
        price: { USD: "$600 /month", KES: "KSh 35,000 /mo" },
        description: "2 platforms plus copywriting.",
        features: [
          "2 advertising platforms",
          "Ad copywriting & creative direction",
          "Landing page CRO",
          "Bi-weekly reporting & strategy calls",
        ],
      },
      {
        name: "Scale & Dominance Retainer",
        price: { USD: "$900+ /month", KES: "KSh 60,000+ /mo" },
        description: "Omnichannel acquisition at scale.",
        features: [
          "Omnichannel campaign management",
          "SEO + paid + content integration",
          "Full-funnel CRO program",
          "Dedicated strategist & live dashboard",
        ],
      },
    ],
  },
  {
    slug: "ai-automations",
    path: "/services/ai-automations",
    title: "AI Automations & AI Agents",
    tagline: "Reclaim hours of your day with intelligent systems.",
    intro:
      "We replace repetitive manual work with intelligent systems that respond, qualify, route and schedule leads around the clock — without adding headcount.",
    included: [
      "24/7 conversational chatbots",
      "Automated WhatsApp API lead routing",
      "Auto-scheduling & calendar sync",
      "Zapier / Make workflow integrations",
      "Custom knowledge base training",
    ],
    tiers: [
      {
        name: "Standard AI Assistant",
        price: { USD: "$500", KES: "KSh 30,000" },
        description: "24/7 web chatbot trained on your business.",
        features: [
          "24/7 website chatbot",
          "Trained on your knowledge base",
          "Lead capture into email/CRM",
          "Handover to human on request",
        ],
      },
      {
        name: "Process Automation System",
        price: { USD: "$1,000", KES: "KSh 55,000" },
        description: "Up to 3 automated workflows.",
        features: [
          "Up to 3 automated workflows",
          "Lead routing & instant replies",
          "Auto-scheduling & reminders",
          "Zapier / Make integrations",
        ],
      },
      {
        name: "Enterprise Autonomous Agent",
        price: { USD: "$1,200+", KES: "KSh 100,000+" },
        description: "Multi-agent workflow with custom API work.",
        features: [
          "Multi-agent workflow orchestration",
          "Custom API & system integrations",
          "Internal ops + client-facing agents",
          "Monitoring, logging & iteration",
        ],
      },
    ],
  },
  {
    slug: "maintenance",
    path: "/services/maintenance",
    title: "Website & System Maintenance",
    tagline: "Keep your site fast, secure and always online.",
    intro:
      "Proactive care for your website and automations: updates, backups, security monitoring and small improvements handled every month, so nothing breaks while you focus on the business.",
    included: [
      "Core, plugin & dependency updates",
      "Daily backups & one-click restore",
      "Uptime & security monitoring",
      "Speed checks & performance tuning",
      "Monthly content edits & small fixes",
    ],
    tiers: [
      {
        name: "Essential Care",
        price: { USD: "$200 /month", KES: "KSh 10,000 /month" },
        description: "Updates, backups and uptime monitoring.",
        features: ["Monthly updates", "Weekly backups", "Uptime monitoring", "Email support"],
      },
      {
        name: "Growth Care",
        price: { USD: "$400 /month", KES: "KSh 20,000 /month" },
        description: "Everything in Essential plus edits and speed tuning.",
        features: ["Daily backups", "Security monitoring", "Up to 2 hours of edits", "Monthly speed report"],
      },
      {
        name: "System Care",
        price: { USD: "$600+ /month", KES: "KSh 30,000+ /month" },
        description: "Sites plus automations, integrations and priority support.",
        features: ["Automation & integration checks", "Priority same-day fixes", "Up to 5 hours of work", "Quarterly strategy review"],
      },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export type CaseStudy = {
  id: string;
  title: string;
  category: "Websites" | "Digital Marketing" | "AI & Automations";
  challenge: string;
  solution: string;
  outcome: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "professional-services-site",
    title: "Professional Services Firm — Lead-Driven Website",
    category: "Websites",
    challenge:
      "A slow, outdated brochure site that generated almost no inbound enquiries despite steady traffic.",
    solution:
      "A rebuilt 6-page conversion system with clear service architecture, WhatsApp lead capture and CRM sync.",
    outcome: ["3.4x increase in enquiry volume", "1.2s average load time", "68% of leads now arrive via mobile"],
  },
  {
    id: "retail-ecommerce-build",
    title: "Regional Retail Brand — E-Commerce Platform",
    category: "Websites",
    challenge: "Orders were handled manually over social DMs, causing lost sales and stock errors.",
    solution: "A full storefront with payments, inventory logic and automated order confirmations.",
    outcome: ["Manual order handling reduced by 80%", "22% higher average order value", "Zero stock-out incidents in Q1"],
  },
  {
    id: "clinic-paid-acquisition",
    title: "Multi-Location Clinic — Paid Acquisition Program",
    category: "Digital Marketing",
    challenge: "High ad spend with untracked results and no visibility into which campaigns produced bookings.",
    solution: "Rebuilt Google and Meta campaigns around intent keywords with full conversion tracking and CRO.",
    outcome: ["Cost per booking down 47%", "2.9x return on ad spend", "Fully attributed booking pipeline"],
  },
  {
    id: "b2b-seo-content",
    title: "B2B Services Company — SEO & Content Positioning",
    category: "Digital Marketing",
    challenge: "Invisible in search for every commercially valuable term in their category.",
    solution: "Technical SEO cleanup plus a positioning-led content program targeting buying-stage queries.",
    outcome: ["Organic traffic up 210% in 6 months", "14 first-page keyword rankings", "31% of new leads from organic"],
  },
  {
    id: "agency-ai-assistant",
    title: "Regional Brand — 24/7 AI Inquiry Assistant",
    category: "AI & Automations",
    challenge: "After-hours enquiries went unanswered until the next working day, losing warm leads.",
    solution: "A conversational AI assistant trained on services and pricing, with instant CRM handoff.",
    outcome: ["Instant response time, 24/7", "15+ hours saved per week", "41% more qualified booked calls"],
  },
  {
    id: "logistics-workflow-automation",
    title: "Logistics Operator — Internal Workflow Automation",
    category: "AI & Automations",
    challenge: "Dispatch, invoicing and client updates were coordinated across spreadsheets and WhatsApp groups.",
    solution: "Three connected automated workflows with auto-scheduling, routing and status notifications.",
    outcome: ["Admin time reduced by 60%", "Invoice errors down to near zero", "Same-day client status updates"],
  },
];

export const PORTFOLIO_CATEGORIES = ["All", "Websites", "Digital Marketing", "AI & Automations"] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Anchor Digital Solutions completely transformed how we capture leads. Our website went from a passive page to our primary driver of new client calls.",
    author: "Operational Director, Professional Services",
  },
  {
    quote:
      "The AI workflow they set up saves us over 15 hours every single week. Inquiry responses are instant, and lead booking runs on autopilot.",
    author: "Founder, Regional Brand",
  },
];

export const FAQS = [
  {
    question: "How long does a standard project take?",
    answer:
      "Landing pages take 5–7 business days; full multi-page web systems and custom AI agent workflows take 2–3 weeks.",
  },
  {
    question: "Do you work with clients outside Kenya?",
    answer:
      "Yes. We operate with asynchronous workflows, clear project management dashboards, and flexible meeting schedules to support international clients alongside regional East African businesses.",
  },
  {
    question: "Do your websites support local payment tools like M-Pesa?",
    answer:
      "Absolutely. We integrate local gateways (M-Pesa, Flutterwave, Paystack) alongside global gateways like Stripe and PayPal.",
  },
  {
    question: "What happens after my site or automation goes live?",
    answer:
      "We provide full post-launch support, technical handoff documentation, and optional monthly optimization retainers for marketing and system maintenance.",
  },
];

export const CORE_PILLARS = [
  {
    title: "Precision Design",
    copy: "Every layout, section and call to action is designed with intent — clarity over decoration, always in service of the next conversion.",
  },
  {
    title: "Measurable Outcomes",
    copy: "We report on leads, bookings and revenue — not vanity metrics. If it cannot be measured, it does not belong in the strategy.",
  },
  {
    title: "Automated Efficiency",
    copy: "Systems should work while you sleep. We automate the repetitive layers of your business so your team focuses on closing.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    copy: "We map your offer, audience and current funnel, then audit where leads are leaking and where time is being lost.",
  },
  {
    step: "02",
    title: "Strategy & Architecture",
    copy: "We design the system: page structure, messaging hierarchy, campaign plan and the automations that connect them.",
  },
  {
    step: "03",
    title: "Precision Build",
    copy: "Design and engineering run together — fast, responsive, tracked and integrated with your CRM and tools from day one.",
  },
  {
    step: "04",
    title: "Launch & Optimization",
    copy: "We launch, measure and iterate. Ongoing CRO and campaign tuning compound your results month after month.",
  },
];

export const SERVICE_OPTIONS = [
  "Website Design & Development",
  "Strategic Digital Marketing",
  "AI Automations & AI Agents",
  "Website & System Maintenance",
  "Not sure yet — need guidance",
];

export const BOOKING_URL = "https://cal.com/anchordigital/15min";
export const BUSINESS_EMAIL = "hello@anchordigitalsolutions.tech";
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/anchordigitalsolutions",
  linkedin: "https://www.linkedin.com/company/anchor-digital-solutions/",
  facebook: "https://www.facebook.com/profile.php?id=61590331780425",
} as const;
export const WHATSAPP_URL = "https://wa.me/254785554098";
export const WHATSAPP_MESSAGE_URL =
  "https://wa.me/254785554098?text=Hello%20Anchor%20Digital%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20services.";
