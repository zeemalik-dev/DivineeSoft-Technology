# Lovable Prompt Pack: DivineeSoft Redesign

How to use: paste **Prompt 1 (Master)** first and let Lovable build. Then paste Prompts 2 to 5 one at a time. Lovable gives better results in phases than from one giant prompt. Replace anything marked `[CONFIRM]` with real data before publishing.

---

## PROMPT 1: MASTER PROMPT (paste this first)

```
You are a senior product designer and front-end engineer. Redesign the website of DivineeSoft Technology (divineesoft.com), a product and software company based in Lahore, Pakistan, serving clients in the US, UK, Pakistan and the Middle East. Build it with React + TypeScript + Tailwind + shadcn/ui, fully responsive (mobile-first), with dark theme as default and a light theme toggle.

## 1. THE PROBLEM WE ARE SOLVING
Visitors land on the site, scroll for a few seconds and leave. They never book a call, never message us. Competitors keep visitors engaged with interactive proof and a sharp positioning. Our current site is a generic "full-service digital agency" page: 7 services, a long case study grid with vague outcomes, stock-photo About page, generic testimonials, and 4-5 competing calls to action. The redesign must make a visitor think within 5 seconds: "These people have built real products like mine, and they will be my technical partner."

## 2. POSITIONING (the single big idea)
Stop being "a full-service digital agency". Become: **the product partner that builds AND runs real platforms.**
Our unfair advantage: we don't only build for clients, we run our own live products and a long-term US partnership:
- Barberz Link and CosmoLink (live iOS + Android apps, US-wide platforms for barbers and beauty professionals)
- BarberzHub (global barber career network, active in 40+ countries)
- Gym Management System (gym.divineesoft.com), a live SaaS for gyms
- Sariea (Pakistan home-services app, 5.0 rating on the App Store)
- Beauty Spot (UK beauty marketplace), Ballerz Network (sports agency platform), Tegal (AI matchmaking app), FEC School App
- AI work: multilingual voice assistant that creates live phone agents, SAFE support chatbot, bank statement processor, Ugo Edit AI image suite
- A long-running technical partnership with BarberzLink LLC (United States): 4+ core systems managed, 24/7 continuity

Hero headline direction (write 3 alternatives in a comment, use the strongest):
- "We build the product. Then we run it with you."
- "From idea to App Store to 10,000 users. One team."
- "Software partners who ship real platforms, not just websites."
Sub-headline: one sentence about idea -> design -> app/web/AI -> cloud -> ongoing growth.
Rotating text under the headline (typewriter): "marketplaces / SaaS platforms / mobile apps / AI agents / booking systems".

## 3. CONVERSION RULES (this is what keeps visitors from leaving)
- ONE primary CTA everywhere: "Book a free strategy call" (opens a modal with a calendar embed placeholder + WhatsApp fallback). ONE secondary CTA: "See live products". Remove the duplicate "Get a Quote / Book a Call / Start Your Project / Pitch your idea" clutter.
- Sticky header with primary CTA always visible. Floating WhatsApp button (+92 314 6256754) bottom-right on every page.
- Every section ends in a micro-CTA that relates to that section, not a generic one.
- Above the fold must show: headline, sub-headline, primary CTA, and a proof strip (live apps count, countries, App Store rating, years). Use real numbers only. If unknown, use `[CONFIRM]` placeholders and render them as clearly editable constants in one `src/data/stats.ts` file.
- Add a 60-second "Project Estimator" (see section 5). It is the main engagement hook.
- Add a lightweight AI chat widget bubble "Ask DivineeSoft" that qualifies leads (what are you building, budget range, timeline, email) and can hand off to WhatsApp or the booking modal. Build the UI now; wire to Lovable Cloud / an edge function.
- Exit-intent (desktop) and 40-second timed (mobile) soft prompt: "Not sure what to build? Take the 60-second estimator."
- No fake testimonials. Layout must support real client quotes with real names, company, country, photo/logo and a link. Until real ones exist, show the Barberz Link / Sariea / BarberzHub results as "proof cards" with outcomes instead.

## 4. HOME PAGE STRUCTURE (in this order)
1. **Header**: logo, nav (Products, Work, Services, Partnership, About, Blog), primary CTA button, theme toggle.
2. **Hero**: headline + sub + 2 CTAs on the left. On the right, an interactive device stack: a phone mockup that auto-cycles through real app screenshots (Barberz Link, CosmoLink, Sariea, Beauty Spot) and a laptop mockup showing the Gym Management dashboard and BarberzHub. Subtle parallax, no heavy video. Below: proof strip with animated counters that start on viewport entry and have static fallback values for SEO/no-JS (the current site shows "0+" to crawlers, fix this).
3. **Live products strip** ("We don't just build for clients. We run these."): 3 large cards for BarberzHub, Gym Management System, Barberz Link / CosmoLink with real screenshot, one-line value, user type, "Open live product" link and store badges.
4. **Industries we know deeply**: tabs or cards for Beauty & Barber, Fitness & Gyms, Home Services, Education, Sports, Health, Startups/MVPs. Each links to an industry landing page (`/for/salons-and-barbers`, `/for/gyms`, `/for/startups`, `/for/home-services`). Show the relevant case study inside each tab.
5. **Selected work**: featured case study carousel with big device mockups, problem -> what we built -> result. Show only 6 best on home, link to full Work page.
6. **How we work**: a horizontal timeline Discover -> Design -> Build -> Launch -> Grow, each step with duration, what the client gets, and a deliverable. Keep our terminal-style motif (monospace `~/divineesoft` snippet) as a small design accent only.
7. **Partnership program**: "Have an idea? We become your technical co-founder team." Use the BarberzLink LLC story as the proof (4+ systems, 24/7). Explain engagement models: Fixed-price MVP, Dedicated team, Product partnership. Pricing placeholders `[CONFIRM]`.
8. **Services (condensed)**: only 4 groups to avoid dilution: Mobile Apps, Web & SaaS Platforms, AI & Automation, Cloud & DevOps. SEO and marketing become "Growth add-ons" in a small row. Each card links to its detail page.
9. **Tech & trust**: Flutter, FlutterFlow, React/Next.js, Node, Firebase, Supabase, AWS/GCP, Stripe, Agora, OpenAI/Vapi. Small logos, grayscale until hover. Add security/NDA/IP-ownership badges ("You own 100% of the code").
10. **Estimator teaser** (full-width banner) -> opens estimator.
11. **FAQ** with schema markup (what does it cost, how long, who owns the code, do you support after launch, can you work in my time zone, do you sign NDAs).
12. **Final CTA**: "Tell us the problem. We'll tell you the plan in 48 hours." Form: name, email/WhatsApp, what are you building (select), budget range (select), short message. Success state with next steps.
13. **Footer**: consistent brand name "DivineeSoft Technologies" (currently inconsistent), real contact details (email, WhatsApp, Lahore), social links, legal links.

## 5. THE "GAME CHANGER" FEATURES (build these, they are the differentiators)
A. **60-Second Project Estimator** (`/estimate`): 5 steps. (1) What are you building? app / web platform / SaaS / AI agent / marketplace. (2) Pick features as selectable chips (auth, payments, chat, maps, admin dashboard, AI, subscriptions, video, notifications). (3) Platforms (iOS, Android, Web). (4) Timeline. (5) Email/WhatsApp. Output: an estimated range in weeks and a price band using a simple config file `src/data/estimator.ts` (values `[CONFIRM]`), plus "Book a call to lock this in". Save leads to Lovable Cloud.
B. **Try our products live**: a "Product Lab" section/page with embedded or linked live demos of the Gym Management System and BarberzHub, with a "Request a demo account" button. This turns visitors into participants.
C. **Case study "Result Cards"**: each shows the platform's before/after, store ratings, tech stack, timeline, and device screenshot gallery. Never invent metrics.
D. **Industry landing pages** that speak the visitor's language (a gym owner should read about member check-ins, a barber shop owner about booth rentals).
E. **AI "Ask DivineeSoft" widget** described above.
F. **Interactive architecture diagram** on the Partnership page showing how we manage product strategy, admin systems, cloud servers, and mobile/web apps (based on the BarberzLink LLC engagement).

## 6. DESIGN SYSTEM
- Mood: confident, technical, warm. Premium product studio, not a template. Avoid generic purple gradients, avoid stock handshake photos, avoid 3-column icon card grids repeated for every section.
- Color (dark default): background `#0A0B10`, surface `#12141C`, border `#232634`, text `#F4F5F7`, muted `#9AA0B4`. Primary accent mint `#34E3A0`, secondary warm amber `#FFB020` used sparingly for highlights and ratings. Light theme mirrors with off-white `#F7F7F4`. Define all as CSS variables / Tailwind tokens, no hardcoded colors in components.
- Type: headings "Bricolage Grotesque" (tight tracking, large, 56-72px desktop hero), body "Inter", code/terminal accents "JetBrains Mono".
- Layout: generous whitespace, 12-col grid, max width 1200px, mix of full-bleed sections and contained cards. Vary section layouts (split, bento grid, horizontal scroll, tabs), do not repeat the same card grid.
- Motion: Framer Motion, subtle: fade-up on view, hover lift on cards, number counters, cycling phone screens. Respect `prefers-reduced-motion`.
- Imagery: real app screenshots inside realistic device frames. Use placeholder device frames and clearly named image slots `/public/projects/<slug>/screen-1.png` so I can drop in real assets. No Unsplash stock on key pages.
- Accessibility: WCAG AA contrast, visible focus states, semantic landmarks, alt text.
- Performance: lazy-load images, avoid layout shift, target Lighthouse 90+.

## 7. PAGES TO CREATE (routes)
`/` Home, `/work` (filterable case study grid by category and industry), `/work/:slug` (case study template), `/services` and `/services/:slug` (4 pages: mobile-apps, web-saas, ai-automation, cloud-devops, plus a short growth-addons page), `/products` (Product Lab), `/partnership`, `/for/:industry` (template, 4 industries), `/estimate`, `/about`, `/contact`, `/blog` (link out to blogs.divineesoft.com for now), `/privacy`, `/terms`, 404.

## 8. DATA, SEO AND TECH NOTES
- Keep all content in typed data files (`src/data/caseStudies.ts`, `services.ts`, `industries.ts`, `faqs.ts`, `stats.ts`) so non-developers can edit.
- SEO: unique title/meta per route (react-helmet-async), Open Graph images, JSON-LD (Organization, FAQPage, CreativeWork for case studies), sitemap and robots, clean URLs, one H1 per page.
- Forms: validated with zod + react-hook-form, store submissions in Lovable Cloud, send notification email placeholder.
- Analytics hooks: track CTA clicks, estimator step completion, and form submits (placeholder `track(event)` util).
- Use the correct brand name consistently: "DivineeSoft Technologies". Canonical domain: https://www.divineesoft.com.

Start by building the design system, the Home page and the shared header/footer. Use realistic copy, not lorem ipsum. Do not invent client names, awards, or numbers; use `[CONFIRM]` where data is missing.
```

---

## PROMPT 2: CASE STUDIES (paste after the home page looks right)

```
Build the /work page and the /work/:slug case study template.

/work: hero with one line ("Real platforms. Live in the App Store and Play Store."), sticky filter bar (All, Mobile Apps, Web, AI, SEO, and industry chips: Beauty & Barber, Education, Home Services, Sports, Fintech, Health). Cards are large with device mockups, category tag, one-sentence result, and store badges. Order by strength, not chronologically.

Case study template sections: 1) hero with device mockups + store links + live site link; 2) at-a-glance sidebar (client, country, industry, platform, timeline `[CONFIRM]`, team size `[CONFIRM]`, tech stack chips); 3) The challenge; 4) What we built (feature highlights with screenshots in a horizontal gallery); 5) How we built it (architecture or tech decisions in plain language); 6) Results (only verified numbers, otherwise qualitative outcomes); 7) client quote slot (hidden if empty); 8) next case study + "Build something like this" CTA.

Seed these case studies with the data below. Rewrite the copy to be specific and outcome-focused, keep facts accurate:
1. Barberz Link (App Development): nationwide platform connecting licensed barbers, shop owners, schools and event organizers across all 50 US states. iOS + Android. Recruitment, event hosting, career development.
2. CosmoLink (App): all-in-one platform for cosmetologists, estheticians, nail techs and beauty pros with salons, spas, schools and events; booth rentals, bookings.
3. Beauty Spot (App): UK beauty marketplace connecting clients with beauty professionals.
4. Tegal (iOS): AI-assisted matchmaking app for marriage-focused relationships.
5. Ballerz Network (App): digital sports agency connecting players, coaches and agents.
6. Sariea (App): Pakistan's home and personal services platform, 5.0/5 on the App Store.
7. FEC School App: parent, teacher and student communication for Froebel Education Centre.
8. Barberz Link Web and CosmoLink Web: marketing and download-conversion websites.
9. Hydrolyz (SEO): page-one rankings for industry terms, more qualified B2B leads.
10. Search Elevation Campaign (SEO): first-page rankings for 15 primary keywords, +120% organic traffic in six months.
11. AI: Multilingual Voice Assistant (creates and configures live phone agents), SAFE Support Chatbot (empathetic, safety-first, auditable), Bank Statement Processor (PDF to structured transactions), Ugo Edit (AI image suite with virtual try-on).
12. EU-SecureSearch (GDPR-first search engine, zero PII leakage).
13. ATECS (corporate website for an engineering services company).
14. Own products: BarberzHub, Gym Management System.

Also include slots for these additional app case studies I will fill from my GitHub repositories (README + screenshots): KuTaGjej (Albanian mobile app), BloodLines (pet lineage tracking with binary-tree ancestry, Firebase), AceTime (AI face-time assistant), ONESEC (company/employee interaction app), learn_arabic, autism-support, Yopii (TikTok-style mobile app). Create them as draft entries with `status: "draft"` and `[CONFIRM]` fields, hidden from the public grid until complete.
```

---

## PROMPT 3: PRODUCT LAB + PARTNERSHIP + INDUSTRY PAGES

```
Build three page types.

1) /products (Product Lab): headline "We run these products every day." Three product sections with alternating layout: BarberzHub (global barber network, jobs and booth rentals, 4K video portfolios, verified licensing, encrypted messaging, subscription tiers, active in 40+ countries), Gym Management System (member management, check-in desk, billing, staff roles, reports `[CONFIRM features]`), Barberz Link / CosmoLink apps. Each has screenshot slots, feature bullets, who it's for, and two CTAs: "Open live product" and "Build something like this". Add a "License or white-label this product" call-out `[CONFIRM if offered]`.

2) /partnership: story-driven page. Hero: "Your idea deserves a technical co-founder team." Sections: the problem (founders who get a freelancer, then no one to maintain it), the model (Strategy -> Design -> Engineering -> Servers -> Long-term support), BarberzLink LLC proof story with an interactive diagram of the 4+ systems we manage (mobile apps, web, admin, cloud infrastructure), three engagement models in a comparison table (Fixed-price MVP / Dedicated team / Product partnership) with price slots `[CONFIRM]`, "What you own" (code, IP, accounts), and an application form "Pitch your idea" with idea stage, target market, budget, timeline.

3) /for/:industry template with 4 seeded industries: Salons & Barbers, Gyms & Fitness, Home Services, Startups & MVPs. Each page: industry-specific headline and pain points, the features businesses in that industry usually need (booking, payments, staff, memberships, marketplace, admin), the matching case study as proof, a mini estimator pre-filled for that industry, and a CTA.
```

---

## PROMPT 4: ABOUT, SERVICES, CONTACT

```
Rebuild /about, /services/:slug, and /contact.

/about: replace stock imagery with a founder-led page. Founder: Zeeshan Malik (CEO, DivineeSoft Technologies; Senior Technical Lead and international partner at BarberzLink LLC). Use photo slots for founder and team (real faces build trust). Honest story: company started 2020 `[CONFIRM]`, based in Lahore, working with clients in US/UK/Middle East. Do not claim a USA studio unless true `[CONFIRM]`. Add a values section (Transparency, Agility, Ownership, Long-term evolution), a "how we work with you" section (weekly demos, shared board, direct access to engineers), a team grid with roles, and real numbers only.

/services/:slug (mobile-apps, web-saas, ai-automation, cloud-devops): each page has outcome-led hero, what we build, process with timeline, tech stack, 3 related case studies, pricing models, FAQ (with FAQPage schema), and CTA. The AI page should highlight the voice assistant, chatbot and document-processing work with short demo clips or screenshots.

/contact: split layout. Left: form (name, email, WhatsApp, project type, budget, timeline, message, file upload for brief). Right: booking calendar embed placeholder, WhatsApp button, email, address (Lahore, Punjab), office hours with time zone converter for US/UK/UAE, response promise ("We reply within 24 hours"). Show the expected process after submit.
```

---

## PROMPT 5: POLISH, SPEED AND SEO

```
Final pass:
1. Audit every page for a single clear primary CTA and remove duplicates.
2. Make sure counters never show "0" before animating (render real value in HTML, animate on top).
3. Add skeleton loaders, image lazy loading, preload hero fonts, and check Lighthouse (Performance, SEO, Accessibility 90+).
4. Add JSON-LD, sitemap.xml, robots.txt, canonical URLs, and OG images per page.
5. Add a cookie/consent banner that is non-blocking.
6. Check mobile layouts at 360px, 390px and 768px; the estimator and booking modal must be thumb-friendly.
7. Add micro-interactions to buttons and cards, and a 404 page with links to Work and Estimator.
8. Add `track(event)` calls on CTA clicks, estimator steps, form submits, WhatsApp clicks.
9. Provide a short README listing every `[CONFIRM]` placeholder so I can fill them in.
```

---

## WHAT TO PREPARE BEFORE YOU PASTE (assets checklist)

- Real app screenshots for Barberz Link, CosmoLink, Sariea, Beauty Spot, Tegal, Ballerz, FEC School, Gym Management System, BarberzHub (name them `/public/projects/<slug>/screen-1.png`).
- Founder photo and team photos.
- Real client quotes with permission (even 2 or 3 real ones beat 5 generic ones).
- Verified numbers: apps live, ratings, countries, years, team size.
- Pricing bands for the estimator and the three engagement models.
- From your GitHub repos (KuTaGjej to Yopii): the README text and `demo/` screenshots for each case study.

## FIXES FOUND IN THE CURRENT SITES (fix regardless of the redesign)

- Homepage counters render as "0+" in the page source, so crawlers and slow visitors see zeros.
- Testimonials use generic names with no photos or links; they weaken trust.
- Case studies page metadata points to `divineesofttechnology.com` instead of `divineesoft.com`; brand name alternates between "Technology" and "Technologies".
- About page mentions a "remote-first studio across the USA" and smart-contract auditors, which don't match the Lahore base or the work shown.
- BarberzHub meta description contains a joke sentence; the footer Facebook link is a broken relative URL (`barberzhub.com/facebook.com/...`).
- gym.divineesoft.com loads as a "Loading Iron Man Portal..." app shell with no public marketing content, so it can't be indexed or understood by visitors.
