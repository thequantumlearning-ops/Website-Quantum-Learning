// Small helpers built on the Web Crypto API available in Cloudflare Workers.

const enc = new TextEncoder();

const toHex = (buf: ArrayBuffer) =>
  [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

export async function hmacHex(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
  ]);
  return toHex(await crypto.subtle.sign("HMAC", key, enc.encode(message)));
}

export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function randomToken(bytes = 24): string {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return [...arr].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Signed links for one-click admin actions sent by email (approve, decline, mark paid).
export async function signAction(secret: string, action: string, id: number, expiresAt: number) {
  return hmacHex(secret, `${action}:${id}:${expiresAt}`);
}

export async function verifyAction(secret: string, action: string, id: number, expiresAt: number, sig: string) {
  if (!secret || !sig || !Number.isFinite(expiresAt) || Date.now() / 1000 > expiresAt) return false;
  return safeEqual(await signAction(secret, action, id, expiresAt), sig);
}

// Verifies the Stripe-Signature header (scheme v1) on a webhook body.
export async function verifyStripeSignature(payload: string, header: string | undefined, secret: string, toleranceSec = 300) {
  if (!header || !secret) return false;
  const parts = Object.fromEntries(
    header.split(",").map((p) => {
      const i = p.indexOf("=");
      return [p.slice(0, i).trim(), p.slice(i + 1).trim()];
    })
  ) as Record<string, string>;
  const timestamp = Number(parts.t);
  if (!timestamp || Math.abs(Date.now() / 1000 - timestamp) > toleranceSec) return false;
  const expected = await hmacHex(secret, `${timestamp}.${payload}`);
  const signatures = header
    .split(",")
    .filter((p) => p.trim().startsWith("v1="))
    .map((p) => p.trim().slice(3));
  return signatures.some((s) => safeEqual(s, expected));
}
