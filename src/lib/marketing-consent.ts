import { googleTagId, googleTagManagerId, metaPixelId } from "@/lib/tracking";

const STORAGE_KEY = "taxsim-marketing-consent-v1";
export const NOTICE_VERSION = "2026-09-27";
export const NOTICE_TEXT = "Usamos cookies de publicidade do Google Ads para medir visitas e melhorar nossos anúncios. Você pode aceitar ou recusar; sua escolha pode ser alterada em Configurações de cookies.";
const CONSENT_COUNTRIES = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH", "BR", "CA",
]);

type Choice = "accepted" | "rejected";
type ConsentEntry = {
  choice: Choice;
  at: string;
  version: string;
  notice: string;
  data: string;
  purposes: string;
  recipients: string;
};
type ConsentRecord = { visitorId: string; history: ConsentEntry[] };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function readConsent(): Choice | null {
  try {
    const record = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") as ConsentRecord | null;
    const entry = record?.history?.at(-1);
    return entry?.version === NOTICE_VERSION && (entry.choice === "accepted" || entry.choice === "rejected") ? entry.choice : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: Choice): boolean {
  try {
    const old = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") as ConsentRecord | null;
    const record: ConsentRecord = {
      visitorId: old?.visitorId || crypto.randomUUID(),
      history: Array.isArray(old?.history) ? old.history : [],
    };
    record.history.push({
      choice,
      at: new Date().toISOString(),
      version: NOTICE_VERSION,
      notice: NOTICE_TEXT,
      data: "IP, identificadores de cookies, navegador, dispositivo e páginas visitadas; nenhum dado de formulário ou WhatsApp",
      purposes: "medição de anúncios e otimização de publicidade",
      recipients: "Google Ads (Google LLC)",
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    return true;
  } catch {
    return false;
  }
}

export async function needsConsentBanner(): Promise<boolean> {
  try {
    const response = await fetch("/cdn-cgi/trace", { signal: AbortSignal.timeout(2000), cache: "no-store" });
    if (!response.ok) return true;
    const location = response.headers.get("content-type")?.includes("text/html") ? "" : (await response.text()).match(/^loc=([^\r\n]+)/m)?.[1];
    return !location || location === "XX" || location === "T1" || CONSENT_COUNTRIES.has(location);
  } catch {
    return true;
  }
}

let installed = false;
export function enableMarketing() {
  if (installed || navigator.globalPrivacyControl === true) return;
  if (readConsent() === "rejected") return;
  installed = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function (...args: unknown[]) { window.dataLayer?.push(args); };
  window.gtag("consent", "update", { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted", analytics_storage: "denied" });
  if (googleTagId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleTagId}`;
    document.head.appendChild(script);
    window.gtag("js", new Date());
    window.gtag("config", googleTagId);
  }
  if (googleTagManagerId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${googleTagManagerId}`;
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    document.head.appendChild(script);
  }
  if (metaPixelId) {
    const fbq = ((...args: unknown[]) => { (fbq as typeof fbq & { queue: unknown[][] }).queue.push(args); }) as typeof window.fbq & { queue: unknown[][] };
    fbq.queue = [];
    window.fbq = fbq;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
    window.fbq("init", metaPixelId);
    window.fbq("track", "PageView");
  }
}

export function disableMarketing() {
  window.gtag?.("consent", "update", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" });
  // Reload removes any already-injected advertising scripts and prevents more events.
  if (installed) window.location.reload();
}

export const consentStorageKey = STORAGE_KEY;