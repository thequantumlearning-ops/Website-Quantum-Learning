# Ambassador program setup

The site runs the whole ambassador program itself: applications, one-click approval by email, personal links,
automatic sale tracking from Stripe, a private earnings page for each ambassador, and a monthly payout email.
Everything below is a one-time setup. After that, the only things you do are tap **Approve** in an email and
send payments once a month.

All of it runs on free plans: Cloudflare Workers + D1 (hosting and database), Resend (email, 3,000 a month),
and Stripe (standard card fees only, which you pay already).

## 1. Host the site on Cloudflare (free)

1. Create a free account at cloudflare.com.
2. **Workers & Pages → Create → Import a repository** and choose `Website-Quantum-Learning`.
3. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
4. **Settings → Domains & Routes → Add → Custom domain** → `skillsvera.com`. If the domain is registered
   somewhere else, Cloudflare walks you through pointing it here. This replaces the current host.

## 2. Create the database

1. **Storage & Databases → D1 → Create** and name it `skillsvera`.
2. Copy its **Database ID** and send it to Claude (it goes in `wrangler.jsonc`), or replace the
   `database_id` there yourself.
3. Open the database's **Console** tab. Paste the contents of `migrations/1.sql`, click Execute, then do the
   same with `migrations/2.sql`.

## 3. Email (Resend, free)

1. Sign up at resend.com and add the domain `skillsvera.com`.
2. Copy the DNS records it shows into Cloudflare's **DNS** page. Wait for Resend to show "Verified".
3. **API Keys → Create** and copy the key (starts with `re_`).

## 4. Stripe

1. **Product catalog → Add product** three times, one per course (Public Speaking, Financial Literacy,
   Innovation & Entrepreneurship), each $125, one-time.
2. **Payment Links → New** for each product. Add custom text fields **Student name**, **Grade**, and
   **Who referred you?** (mark that one optional). Copy all three links and send them to Claude, or paste
   them into `paymentLinks` in `src/react-app/site.ts`.
3. **Developers → Webhooks → Add endpoint**: `https://skillsvera.com/api/stripe/webhook`.
   Select the events `checkout.session.completed`, `checkout.session.async_payment_succeeded` and
   `charge.refunded`. Copy the **Signing secret** (starts with `whsec_`).

## 5. Secrets and settings

In Cloudflare, open the Worker → **Settings → Variables and Secrets**.

Add these as **Secret** (encrypted, never visible again):

| Name | Value |
| --- | --- |
| `ADMIN_SECRET` | A long random password, 32+ characters. It signs the Approve and Mark-paid links. |
| `RESEND_API_KEY` | The Resend key from step 3 |
| `STRIPE_WEBHOOK_SECRET` | The `whsec_` signing secret from step 4 |

Add these as plain **Text** variables:

| Name | Value |
| --- | --- |
| `KIT_URL` | Link to the ambassador starter kit (optional) |

Never paste secrets into chat, email or the code.

## 6. Test it once

1. Apply on `/careers` using your own email.
2. You get an email with **Approve**. Tap it, then confirm.
3. You get a welcome email with your personal link (`skillsvera.com/?ref=YOURCODE`). Open it, click Enroll
   on any course and pay, then refund yourself in Stripe afterwards.
4. Within seconds you get "You earned $25.00", and your earnings page shows the sale.

## How it runs day to day

| When | What happens | What you do |
| --- | --- | --- |
| Someone applies | Saved; you get their details with Approve and Decline buttons; they get a confirmation (parent copied if under 18) | Tap Approve or Decline |
| You approve | They get their code, personal link, earnings page and kit | Nothing |
| A parent pays through a link, or types the code at checkout | The sale is credited and the ambassador is emailed | Nothing |
| A payment is refunded | That commission is removed | Nothing |
| 1st of each month, 9am Eastern | You get a list of who's owed what (sales older than 14 days) | Send each payment, tap Mark paid |

To remove an ambassador, use the **Deactivate** button in the "Approved" email you got for them.
Their code stops earning; past earnings are kept.

## Settings you can change

`wrangler.jsonc` → `vars`: `TEAM_EMAIL` (where applications go), `FROM_EMAIL`, `REFUND_WINDOW_DAYS`.
The commission rate (20%) is `COMMISSION_RATE` in `src/worker/ambassadors.ts`.
