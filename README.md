# Nishant Tripathi — Portfolio

A premium, production-ready personal portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Signature visual: an ambient network-topology canvas in the hero — nodes drifting and linking like a live NOC map, matching the subject of the site.

## Features

- Full-screen animated hero with a canvas-based network topology background and a typewriter role rotator
- Dark / light mode (`next-themes`), system-aware, no flash-of-wrong-theme
- Sections: Hero, About, Skills, Experience, Projects, Achievements, Certifications, Contact, Footer
- Glassmorphism cards, gradient accents, scroll-triggered reveals, animated counters, animated skill bars
- Validated contact form (`react-hook-form` + `zod`) posting to a real API route (`app/api/contact/route.ts`) with success/error states and basic rate limiting
- SEO: metadata, Open Graph/Twitter cards, `sitemap.ts`, `robots.ts`
- Fully responsive, keyboard-focus visible, respects `prefers-reduced-motion`
- All content centralized in `lib/data.ts` — edit once, updates everywhere

## Project structure

```
app/
  layout.tsx          # Root layout, fonts, metadata
  page.tsx             # Assembles all sections
  globals.css          # Design tokens & utilities
  sitemap.ts / robots.ts
  api/contact/route.ts # Contact form endpoint
components/            # One component per section + shared UI (Reveal, SectionHeading, etc.)
lib/data.ts             # All copy: profile, skills, experience, projects, achievements, certs
public/                 # Static assets (add resume.pdf, og-image.png, project screenshots here)
```

## Getting started locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY if you want real emails
npm run dev
```

Visit `http://localhost:3000`.

### Before you ship

1. Add a real `public/resume.pdf` (the Hero "Download Resume" button links to `/resume.pdf`).
2. Add `public/og-image.png` (1200×630) for social share previews.
3. Update `lib/data.ts`: real email, phone, GitHub/LinkedIn URLs, project links, and screenshots.
4. Update `siteUrl` in `app/layout.tsx` and the URLs in `app/sitemap.ts` / `app/robots.ts` to your real domain.
5. Sign up at [resend.com](https://resend.com), verify a sender domain, and set `RESEND_API_KEY` + `CONTACT_TO_EMAIL` so the contact form sends real email. Without these, submissions are just logged server-side (useful for local dev, not for production).

## Deploying to Azure

You have two good options depending on how hands-on you want to be. Both are covered below.

### Option A — Azure Static Web Apps (recommended, simplest, generous free tier)

Azure Static Web Apps has first-class Next.js hybrid (SSR + API routes) support via the standalone output mode.

1. **Enable standalone output.** In `next.config.mjs`, add:
   ```js
   const nextConfig = {
     output: "standalone",
     // ...rest of your config
   };
   ```
2. **Push this project to a GitHub repository.**
3. In the [Azure Portal](https://portal.azure.com), create a new **Static Web App**:
   - Source: GitHub → authorize and pick your repo/branch
   - Build preset: **Next.js**
   - App location: `/`
   - Output location: leave as suggested by the Next.js preset (Azure's build pipeline handles the `.next` output automatically)
4. Azure will commit a GitHub Actions workflow (`.github/workflows/azure-static-web-apps-*.yml`) to your repo and trigger the first deployment automatically.
5. In **Static Web App → Configuration**, add your environment variables (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`) as **Application settings** — this is where the contact form's API route will read them from at runtime.
6. Add a custom domain under **Custom domains** once you're ready to go live.

Every push to your main branch redeploys automatically.

### Option B — Azure App Service (Linux, Node runtime)

Good if you want a persistent Node server, more control, or plan to add heavier backend logic later.

1. **Build locally to confirm it's production-ready:**
   ```bash
   npm run build
   ```
2. **Create the resources (Azure CLI):**
   ```bash
   az login

   az group create --name rg-nishant-portfolio --location centralindia

   az appservice plan create \
     --name plan-nishant-portfolio \
     --resource-group rg-nishant-portfolio \
     --sku B1 \
     --is-linux

   az webapp create \
     --name nishant-tripathi-portfolio \
     --resource-group rg-nishant-portfolio \
     --plan plan-nishant-portfolio \
     --runtime "NODE|20-lts"
   ```
3. **Configure the startup command** (App Service needs to know how to run a Next.js app):
   ```bash
   az webapp config set \
     --name nishant-tripathi-portfolio \
     --resource-group rg-nishant-portfolio \
     --startup-file "npm run start"
   ```
4. **Set environment variables:**
   ```bash
   az webapp config appsettings set \
     --name nishant-tripathi-portfolio \
     --resource-group rg-nishant-portfolio \
     --settings RESEND_API_KEY="your_key" CONTACT_TO_EMAIL="you@example.com" WEBSITE_NODE_DEFAULT_VERSION="~20"
   ```
5. **Deploy** — easiest via GitHub Actions (App Service → Deployment Center → connect your repo, Azure scaffolds the workflow), or via zip deploy:
   ```bash
   npm run build
   zip -r deploy.zip . -x "node_modules/*" ".git/*"
   az webapp deploy \
     --name nishant-tripathi-portfolio \
     --resource-group rg-nishant-portfolio \
     --src-path deploy.zip \
     --type zip
   ```
6. Turn on **HTTPS Only** and attach a custom domain under **Custom domains** + **TLS/SSL settings**.

### Notes for either option

- The contact form's API route (`app/api/contact/route.ts`) runs server-side — it works on both Static Web Apps (as a managed API function) and App Service (as part of the Node server). No separate backend needed.
- If you skip configuring Resend, the form still works end-to-end and shows the success state, but submissions are only logged to server logs — wire up Resend (or swap in SendGrid/Azure Communication Services Email) before treating this as your real contact channel.
- Enable **Application Insights** on either resource if you want traffic/error monitoring out of the box.

## Tech stack

Next.js 15 · React 18 · TypeScript · Tailwind CSS · Framer Motion · next-themes · react-hook-form · zod · lucide-react · react-icons
