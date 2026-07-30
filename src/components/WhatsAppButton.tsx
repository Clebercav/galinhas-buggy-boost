import { cn } from "@/lib/utils";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm0 18.16h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.16 8.16 0 0 1-1.25-4.36c0-4.55 3.71-8.26 8.27-8.26 2.2 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.85c0 4.56-3.71 8.19-8.32 8.19Zm4.53-6.15c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.14-1.19-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

type Props = {
  message?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "solid" | "gold" | "outline";
  size?: "md" | "lg";
};

export function WhatsAppLink({
  message = DEFAULT_WHATSAPP_MESSAGE,
  className,
  children,
  variant = "solid",
  size = "lg",
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:-translate-y-0.5",
        size === "lg" ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm",
        variant === "solid" && "bg-whatsapp text-navy-foreground shadow-glow hover:brightness-105",
        variant === "gold" && "bg-gold text-gold-foreground shadow-glow hover:brightness-105",
        variant === "outline" &&
          "border-2 border-navy-foreground/70 text-navy-foreground backdrop-blur-sm hover:bg-navy-foreground/10",
        className,
      )}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      {children}
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-4 text-navy-foreground shadow-glow transition-transform duration-300 hover:scale-105 sm:px-5"
    >
      <WhatsAppIcon className="size-7" />
      <span className="hidden text-sm font-semibold sm:inline">Reservar no WhatsApp</span>
    </a>
  );
}

export { WhatsAppIcon };
