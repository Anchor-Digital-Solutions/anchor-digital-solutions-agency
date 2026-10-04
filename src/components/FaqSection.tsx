import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/content";

export function FaqSection() {
  return (
    <section className="py-12" aria-labelledby="faq-heading">
      <p className="text-xs font-semibold tracking-widest text-muted-foreground">FREQUENTLY ASKED QUESTIONS</p>
      <h2 id="faq-heading" className="mt-2 text-2xl font-bold">What to know before we start</h2>
      <div className="mt-6 divide-y divide-border border-y border-border">
        {FAQS.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 max-w-3xl text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}