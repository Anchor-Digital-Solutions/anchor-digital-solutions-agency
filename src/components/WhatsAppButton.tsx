import { MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGE_URL } from "@/lib/content";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_MESSAGE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Anchor Digital Solutions on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-all hover:scale-105 hover:bg-whatsapp-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring motion-reduce:hover:scale-100"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}