import { SITE } from "./site";

// Ambassadors share links like skillsvera.com/?ref=MAYA214. The code is remembered in this browser for
// 30 days and attached to whichever course the parent buys, so the ambassador is credited automatically.

const KEY = "skillsvera_ref";
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

export function captureReferral(search: string) {
  const ref = new URLSearchParams(search).get("ref");
  if (!ref) return;
  const code = ref.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 20);
  if (!code) return;
  try {
    localStorage.setItem(KEY, JSON.stringify({ code, at: Date.now() }));
  } catch {
    /* storage blocked: the parent can still type the code at checkout */
  }
}

export function getReferral(): string | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const { code, at } = JSON.parse(raw) as { code: string; at: number };
    if (!code || Date.now() - at > TTL_MS) return null;
    return code;
  } catch {
    return null;
  }
}

export function enrollHref(trackId: string): string {
  const link = SITE.paymentLinks[trackId];
  if (!link) return "/schedule";
  const ref = getReferral();
  if (!ref) return link;
  return `${link}${link.includes("?") ? "&" : "?"}client_reference_id=${encodeURIComponent(ref)}`;
}
