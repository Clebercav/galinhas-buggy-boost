import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { consentStorageKey, disableMarketing, enableMarketing, needsConsentBanner, NOTICE_TEXT, readConsent, saveConsent } from "@/lib/marketing-consent";

export function MarketingConsent() {
  const [visible, setVisible] = useState(false);
  const [choice, setChoice] = useState<"accepted" | "rejected" | null>(null);

  useEffect(() => {
    let active = true;
    const onSettings = () => setVisible(true);
    const onStorage = (event: StorageEvent) => {
      if (event.key === consentStorageKey) window.location.reload();
    };
    window.addEventListener("open-cookie-settings", onSettings);
    window.addEventListener("storage", onStorage);
    void needsConsentBanner().then((regulated) => {
      if (!active) return;
      const saved = readConsent();
      setChoice(saved);
      if (saved === "accepted" || (!regulated && saved !== "rejected")) enableMarketing();
      if (regulated && saved === null) setVisible(true);
    });
    return () => {
      active = false;
      window.removeEventListener("open-cookie-settings", onSettings);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const decide = (next: "accepted" | "rejected") => {
    if (!saveConsent(next)) return; // Failed storage must not accidentally authorize tracking.
    setChoice(next);
    setVisible(false);
    if (next === "accepted") enableMarketing();
    else disableMarketing();
  };

  if (!visible) return null;
  return (
    <aside role="dialog" aria-label="Preferências de cookies" className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-background p-5 shadow-card sm:bottom-5 sm:left-5 sm:right-auto sm:w-[min(30rem,calc(100vw-2.5rem))] sm:rounded-md sm:border">
      <h2 className="font-display text-lg font-bold text-foreground">Privacidade e anúncios</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{NOTICE_TEXT}</p>
      <Link to="/politica-de-privacidade" className="mt-2 inline-block text-sm font-medium text-foreground underline underline-offset-4">Política de Privacidade</Link>
      {choice && <p className="mt-2 text-xs text-muted-foreground">Escolha atual: {choice === "accepted" ? "aceito" : "recusado"}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        <Button onClick={() => decide("rejected")} variant="outline" className="flex-1">Recusar</Button>
        <Button onClick={() => decide("accepted")} className="flex-1">Aceitar</Button>
        {choice && <Button variant="ghost" onClick={() => setVisible(false)} className="w-full">Fechar sem alterar</Button>}
      </div>
    </aside>
  );
}