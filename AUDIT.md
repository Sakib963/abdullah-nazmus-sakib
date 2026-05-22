# sakib.app — Production Audit

_Date: 2026-05-22_
_Scope: performance, responsiveness, SEO, accessibility, UX_

---

## 1. CRITICAL

### C1. OG image referenced in metadata doesn't exist
**Where:** [app/layout.tsx:64-71, 78](app/layout.tsx#L64-L71) → `/og-image.png`. `ls public/` shows only `favicon.svg`, `abdullah_nazmus_sakib.png`, `blog/`, `projects/`, `reflections/`.
**Impact:** Every LinkedIn/Twitter/Slack/WhatsApp share of `sakib.app` returns a broken preview. This single file fixes thousands of impressions worth of social CTR.
**Fix:** Drop a 1200×630 WebP/PNG at `public/og-image.png` (or change metadata to point at `/abdullah_nazmus_sakib.png` for now). Run the URL through `opengraph.xyz` to verify.

### C2. Reflection images are 1.4 MB + 985 KB PNGs
**Where:** `public/reflections/kamruzzaman-tanim.png` (1.4 MB), `public/reflections/sohel-rana.png` (985 KB), rendered as a 44×44 px avatar in [components/reflections/ReflectionCard.tsx:73-79](components/reflections/ReflectionCard.tsx#L73-L79).
**Impact:** ~2.4 MB delivered to render two thumbnails the size of a postage stamp. On a slow 3G this alone adds 6–10 s. Next/Image will resize but still has to download the original on first transform/cache miss.
**Fix:** Resize sources to ~200×200 WebP (will be <20 KB each). Same applies to `public/blog/stockflow-phase-2.png` (826 KB) and `public/projects/stockflow-thumbnail.png` (826 KB) — both should be ~80 KB WebP.

### C3. Material Symbols loaded as render-blocking external CSS
**Where:** [app/layout.tsx:103-106](app/layout.tsx#L103-L106) — `<link rel="stylesheet" href="fonts.googleapis.com/...">` in `<head>` with no `media` swap trick and no `preconnect`.
**Impact:** Blocks first paint until Google's CSS round-trip completes. The icon font itself is large (variable axis font with full glyph set) and you use ~25 icons. This delays LCP measurably on cold connections and explains any "render-blocking" Lighthouse warnings.
**Fix:** Either (a) self-host a *subset* of the icons you actually use via `lucide-react`/`react-icons` (you already use `react-icons` — finish the migration and drop Material Symbols), or (b) at minimum add `media="print" onLoad="this.media='all'"` async pattern, plus `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`. The variable-axis URL is also way overpowered for static usage — pin a single weight/fill if you keep it.

### C4. HeroDecorations is an animation nuke
**Where:** [components/hero/HeroDecorations.tsx](components/hero/HeroDecorations.tsx) — 18 SVG `TracePulse` paths (each with infinite `strokeDashoffset` keyframes + `drop-shadow` filter), 10 pulsing `Node` dots, 12 floating `CodeGlyph`s with `drop-shadow(0 0 6px)`, 4 `TechCorner`s, 4 `HudLabel` blocks each animating 2 lines, 2 vertical `BinaryStream`s, plus a blinking `Cursor`. That's ~50 simultaneous `framer-motion` animations on the most visible part of the page.
**Impact:** Each `motion.path` with `filter: drop-shadow()` forces a separate composite layer; `drop-shadow` is not GPU-accelerated the same way `box-shadow` is — it's painted on the CPU on every frame. On a mid-tier Android the hero pegs the main thread before the user has scrolled. Combined with `transition: background-color 0.4s` on `html` ([globals.css:107-110](styles/globals.css#L107-L110)), any theme toggle compounds it.
**Fix:** Three options, pick at least two:
- Replace `filter: drop-shadow` with `<feGaussianBlur>` inside the SVG (single composite layer for the whole SVG) or accept the trace lines without glow.
- Cap to 4–6 traces total on `<lg` viewports — most of them are off-screen on mobile anyway.
- Add `useMediaQuery` for `(max-width: 768px)` and short-circuit the whole component (you already gate on `prefers-reduced-motion` — extend to "low-end").

### C5. Custom cursor `<style>{*, *::before, *::after { cursor: none !important }}</style>` is hostile + heavy selector
**Where:** [components/ui/MouseEffect.tsx:153-155](components/ui/MouseEffect.tsx#L153-L155).
**Impact:** Universal selector with three pseudo-selectors and `!important` forces a style recalc against every element on the page. The "no cursor" UX also frustrates users with motor impairment or anyone who relies on text-cursor changes over inputs — even though you gate on `pointer: coarse`, desktop users with assistive devices get punished. Plus the ring uses `backdropFilter: blur(1px)` which is paid every mousemove frame.
**Fix:** Use `body { cursor: none }` only (you already set it imperatively at [line 76](components/ui/MouseEffect.tsx#L76)). Add `:focus-visible { cursor: auto }` so keyboard/AT users get the system cursor back when needed. And drop the 1px backdrop-blur on the ring — it's invisible and expensive.

### C6. `backdrop-filter: blur(56px)` on the navbar
**Where:** [components/navbar/Navbar.tsx:82, 128](components/navbar/Navbar.tsx#L82) and [components/navbar/SideNav.tsx:39](components/navbar/SideNav.tsx#L39).
**Impact:** 56 px backdrop blur over the navbar's width means the GPU re-samples roughly the entire hero region every scroll frame. This is the #1 source of scroll jank on Safari/iOS and low-tier Android. Combined with `glass-panel` (`blur(24px)`) on ~30+ other elements, the page has compositing pressure even when idle.
**Fix:** Drop the navbar to `blur(12-16px)`. The visual difference past 16 px is marginal. Same for SideNav. Consider `@supports not (backdrop-filter: blur(1px))` with a solid translucent fallback — and for cards that don't *need* the see-through effect (e.g. `StatCard`, `ServiceCard`), use a solid `bg-surface/80` and drop the filter entirely.

### C7. Horizontal-scroll / page-shrink loop on mobile *(reported by user, root cause confirmed)*
**Where:** Two sections are missing `overflow-hidden`:
- [components/hero/Hero.tsx:9-12](components/hero/Hero.tsx#L9) — `<section id="Home" className="min-h-screen flex flex-col px-6 md:px-16 lg:px-24 pt-28 pb-20 relative">` (no `overflow-hidden`)
- [components/reflections/Reflections.tsx:62-65](components/reflections/Reflections.tsx#L62) — `<section id="Reflections" className="py-32 md:py-40 px-6 md:px-16 lg:px-24 relative">` (no `overflow-hidden`)

Inside those sections, multiple elements transform on the **x axis** in an infinite loop:
1. **Reflections** auto-rotates every 5 s ([Reflections.tsx:51](components/reflections/Reflections.tsx#L51)) and each rotation runs `cardVariants` with `enter: { x: 40 }` and `exit: { x: -40 }` ([Reflections.tsx:14-23](components/reflections/Reflections.tsx#L14-L23)). That's a ±40 px horizontal slide on a card that's already at the viewport edge on mobile (`px-6`, so only 24 px gutter). The 40 px overshoot extends past the section, the section has no clip, and the page widens — then snaps back when the animation lands at `x: 0`.
2. **Hero** has `AnimatedBlob` elements at `-left-[5%]`, `-right-[5%]` ([Hero.tsx:13-14](components/hero/Hero.tsx#L13)) that run `blob-drift` (`scale(1.08) → scale(0.96)`) on an infinite loop ([globals.css:151-161](styles/globals.css#L151-L161)). A `w-[500px]` blob scaling to 1.08 becomes 540 px; sitting at `-left-[5%]` it spills further past the viewport edge on every cycle.

Why `overflow-x: hidden` on `<body>` doesn't save you:
- iOS Safari has a long-standing bug where transformed children of an `overflow-x: hidden` ancestor can still drive document width (it ignores the clip for layout, only honors it for paint in some cases).
- `Lenis` smooth-scroll wraps body/html scroll handling and can interact badly with the body clip on iOS.

**Impact:** Mobile users get a constantly resizing viewport — pages momentarily widen, browser fits, animation reverses, browser re-fits. Looks like the site is "breathing" and confirms low quality on first impression. This is launch-blocking.

**Fix (in order of priority):**
1. Add `overflow-hidden` to the Hero `<section>` and Reflections `<section>` (one-line change each).
2. Add `overflow-x: clip;` to `html` in `globals.css` (modern, more reliable than `overflow: hidden` and doesn't create a new scroll context — better than relying on body alone).
3. As a belt-and-braces measure, audit every top-level `<section>` for an `overflow-hidden` class — About/Services/Skills/Projects/Blogs/Contact already have it; only Hero and Reflections are missing it.
4. (Optional) On mobile, drop the Reflections enter/exit `x` distance from 40 → 20, since the card is full-width and a big slide adds nothing.

See **§4 Mobile bug deep dive** at the bottom for the full reasoning.

---

## 2. MEDIUM

### M1. PhotoCard runs a backdrop-filter + infinite Y bounce on the same element
**Where:** [components/hero/HeroImage.tsx:176-187](components/hero/HeroImage.tsx#L176-L187) — `animate={{ y: [0, -10, 0] }}` with `backdropFilter: blur(20px)`.
**Impact:** Transform-on-blurred-element forces blur recomputation every frame. Either keep the blur OR keep the bounce, not both.
**Fix:** Wrap the blur in a static parent and animate a child via `transform: translateY(...)`, or remove the bounce — it adds little.

### M2. Terminal typewriter does a setState every 22–44 ms
**Where:** [components/hero/HeroImage.tsx:78-102](components/hero/HeroImage.tsx#L78-L102). Same pattern in [components/ui/Typewriter.tsx](components/ui/Typewriter.tsx).
**Impact:** ~30 React renders/sec on a backdrop-filtered container while the page is loading. Pulls cycles from LCP work, and reconciles the entire snippet array each tick.
**Fix:** Use a single `useRef<HTMLPreElement>` and append text imperatively (or use `requestAnimationFrame` with a string accumulator and `textContent` writes). One DOM write per character, zero React reconciliation.

### M3. Scroll listeners aren't throttled (multiple)
**Where:** [components/navbar/Navbar.tsx:28-32](components/navbar/Navbar.tsx#L28), [components/ui/BackToTop.tsx:10-14](components/ui/BackToTop.tsx#L10), [components/hero/ScrollBridge.tsx:9-13](components/hero/ScrollBridge.tsx#L9). With Lenis driving smooth scroll, you fire `setState` on every single rAF-paced scroll event from all three.
**Impact:** Each one calls `setState` even when the boolean doesn't flip, but React still bails out — so the real cost is the three function invocations per frame plus the comparisons. Minor on desktop, noticeable on low-end mobile.
**Fix:** Either consolidate into a single Lenis subscription, or throttle with `requestAnimationFrame` and only `setState` on transition. Better: use `IntersectionObserver` on a 1px sentinel at `top: 24px` — zero scroll listeners.

### M4. `transition: background-color 0.4s, color 0.4s` on `<html>`
**Where:** [styles/globals.css:107-110](styles/globals.css#L107-L110).
**Impact:** Combined with the View Transitions API call in `NavWrapper.handleToggle`, this stacks a CSS transition on top of a snapshot crossfade. The 400 ms color transition also fires on initial paint as variables resolve, contributing to a brief "settling" effect.
**Fix:** Drop this rule — `startViewTransition` already handles the crossfade. If you want the fallback path (browsers without `startViewTransition`) to fade, scope the transition to that branch only.

### M5. Grayscale + scale on hover with 700–1000 ms duration
**Where:** [components/projects/ProjectCard.tsx:58](components/projects/ProjectCard.tsx#L58), [components/hero/HeroImage.tsx:196](components/hero/HeroImage.tsx#L196).
**Impact:** `grayscale` is a CSS filter — composited on the GPU, but combined with `scale-105` and a 700 ms `transition-all`, every property on the element gets a transition, including expensive ones. The `hover:grayscale-0 transition-all duration-1000` on the hero photo means hover triggers a full second of compositing while the card is still animating.
**Fix:** `transition-[transform,filter] duration-500` — scope the transition. Or remove the grayscale gimmick for the avatar (it makes you harder to recognize, which is bad personal-branding).

### M6. A wall of sub-12 px text
**Where:** 36 occurrences of `text-[8px]`/`text-[9px]`/`text-[10px]` across components. Examples: PhotoCard "Yrs/Projects/Live" labels at 8 px, navbar links at 11 px uppercase, TagPill labels, stat sublabels.
**Impact:** WCAG doesn't dictate a minimum font size, but uppercase + `tracking-widest` at 8–10 px is illegible for many users, especially on dense screens. iOS users see it shrink further under default zoom.
**Fix:** Floor everything at 11 px and reserve `text-[10px]` for *truly* decorative labels (single words). Convert `tracking-widest` + `uppercase` at small sizes to small-caps or just normal casing.

### M7. Low-contrast variants used liberally
**Where:** `text-on-surface-variant/60`, `/70`, `/85`, `/25`, `/30` appear in 80+ spots.
**Impact:** Your CSS variable system documents the *opaque* contrast ratios (6.4:1, 5.9:1) — but `/30` multiplies that by 0.3, dropping below WCAG AA (4.5:1 for body text). On the lavender background especially, the muted text is borderline.
**Fix:** Run the rendered page through Stark or axe. As a rule, never go below `/70` for *informational* text; reserve `/50` and below for decorative dividers and dots.

### M8. No visible focus ring
**Where:** No `:focus-visible` styles in [globals.css](styles/globals.css) and no Tailwind `focus-visible:` utilities on any of the buttons/links (Navbar, BackToTop, HeroContent CTAs, ProjectCard buttons).
**Impact:** Keyboard users have no idea what's focused. The browser default outline is overridden by Tailwind preflight. This is a hard a11y failure.
**Fix:** Add `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary` to interactive elements. A single `*:focus-visible { outline: 2px solid rgb(var(--color-primary)); outline-offset: 2px; }` in globals would cover everything.

### M9. No skip-to-content link
**Where:** [app/layout.tsx](app/layout.tsx) — body starts with `<MouseEffect />`, `<NavWrapper />`, then `{children}`. No `<a href="#main">Skip to content</a>`.
**Impact:** Screen reader and keyboard-only users have to tab through every nav link on every page load.
**Fix:** Add a visually-hidden skip link as the first focusable element. Six lines.

### M10. Section anchors use PascalCase IDs (`#About`, `#Skills`)
**Impact:** Works, but capital-letter URL fragments break some social previews and feel cargo-culted. Also forces case-sensitive comparisons in `sectionId(href)` — fragile.
**Fix:** Migrate to lowercase (`#about`, `#skills`). Add 301 redirects for the old ones if any external links exist.

---

## 3. NICE-TO-HAVE

### N1. Dead code: two MouseEffect components
[components/ui/MouseEffect.tsx](components/ui/MouseEffect.tsx) and `MouseEffectV2.tsx` both exist. Pick one; delete the other.

### N2. `gsap` ScrollTrigger duplicated across 5 sections
About, Services, Projects, Blogs, Contact all use the same `gsap.from(headingRef, { y: 28, ... })` pattern with `ScrollTrigger`. Five separate `gsap.context()` calls + matching `ScrollTrigger` instances when one CSS animation with `@starting-style` or a single `IntersectionObserver` would do.

### N3. Marquee with `backdrop-filter` on every chip
[components/skills/SkillsV2.tsx:94-108](components/skills/SkillsV2.tsx#L94-L108) — each chip in the infinite-scrolling marquee has `backdropFilter: blur(10px)`. ~40+ blurred surfaces moving simultaneously across the GPU. The blur adds nothing because the chips are translucent over a solid background — drop it.

### N4. `<Image priority>` on hero photo, but no `<link rel="preload">` for the OG fonts
Two Google Font families (`Space_Grotesk`, `Inter`) are loaded via `next/font` (good) — but the third font (`Material Symbols Outlined`) bypasses next/font entirely. Either bring it through `next/font/google` or kill it (see C3).

### N5. `<Script id="json-ld" strategy="beforeInteractive">`
JSON-LD doesn't need `beforeInteractive`. It's just data for crawlers. `strategy="afterInteractive"` (default) is fine and avoids the small extra blocking cost.

### N6. `suppressHydrationWarning` on `<html>` AND `<body>`
[app/layout.tsx:100, 108](app/layout.tsx#L100). On `<html>` it's justified (your `theme-init` script mutates the class). On `<body>` it's a blunt instrument that will hide *real* hydration bugs in future. Remove it from `<body>`.

### N7. Reflection auto-rotate continues while tab is hidden
[components/reflections/Reflections.tsx:49-53](components/reflections/Reflections.tsx#L49) — `setInterval(next, 5000)` runs even when the tab is backgrounded. Add a `document.visibilityState !== "visible"` check.

### N8. `useActiveSection` re-creates observers on every pathname change
The `setActive("Home")` reset at [useActiveSection.ts:17](components/navbar/useActiveSection.ts#L17) fires before the observer attaches, which causes a brief flash of "Home" highlight while scrolled deep into another section on client-side back-nav.

### N9. Tailwind unused color tokens
[tailwind.config.ts:13-66](tailwind.config.ts#L13-L66) — ~30 M3 leftover tokens (`on-secondary-fixed`, `inverse-surface`, etc.). Tree-shaken in prod, but noise.

### N10. Lenis `touchMultiplier: 2`
[components/ui/SmoothScroll.tsx:17](components/ui/SmoothScroll.tsx#L17) — doubles touch scroll speed. Combined with the page's heavy animations this overshoots on mobile. Drop to `1` or `1.2`.

---

## 4. Mobile bug deep dive — the "shrink/expand loop"

**User report:** "in mobile you can scroll horizontally and you will see the web page automatically shrinking, and then again expanded"

**Diagnosis:**

Two simultaneous failures combine to produce the symptom.

### A. Two `<section>`s are missing `overflow-hidden`

Quick audit of section wrappers:

| Section     | `overflow-hidden`? | Has x-axis animation inside? |
|-------------|--------------------|------------------------------|
| Hero        | ❌ NO              | ✅ blob-drift `scale(1.08)`  |
| About       | ✅ yes             | —                            |
| Services    | ✅ yes             | —                            |
| Skills      | ✅ yes             | marquee (already clipped)    |
| Projects    | ✅ yes             | —                            |
| Blogs       | ✅ yes             | —                            |
| Reflections | ❌ NO              | ✅ card slide `x: 40 → -40`  |
| Contact     | ✅ yes             | —                            |

### B. Both unclipped sections contain transforms that overshoot horizontally

**Reflections** — every 5 s, the mobile card runs:
```ts
enter:   { opacity: 0, x: 40 }
visible: { opacity: 1, x: 0 }
exit:    { opacity: 0, x: -40 }
```
On a 360–390 px wide viewport with `px-6` (24 px gutters), a 40 px slide overshoots the right edge of the section by ~16 px during enter and the left edge during exit. With no `overflow-hidden` on the section, that 16 px expansion propagates upward.

**Hero** — `AnimatedBlob` runs CSS keyframes:
```css
@keyframes blob-drift {
  40%  { transform: translate3d(12px, -8px, 0) scale(1.08); }
  70%  { transform: translate3d(-6px, 5px, 0) scale(0.96); }
}
```
A `w-[500px]` blob at `-left-[5%]` scaling to 1.08 becomes 540 px; combined with the negative offset it spills further past the right viewport edge each cycle.

### C. Why `overflow-x: hidden` on `<body>` isn't catching it

You have `overflow-x-hidden` on `<body>` in [layout.tsx:108](app/layout.tsx#L108) and `overflow-x: hidden` again in [globals.css:119](styles/globals.css#L119). On desktop browsers this works. On **iOS Safari** specifically:
- Transformed children of `overflow-x: hidden` ancestors can still drive the document's intrinsic width — Safari clips paint but not layout.
- `Lenis` smooth-scroll attaches a transform/ticker to the document and interferes with the body-level clip on iOS.
- The result: the viewport-fitting algorithm sees a slightly-too-wide document, fits to it (page "shrinks"), the animation reverses, the document narrows again, browser re-fits ("expands"). Loop.

### D. Fix (smallest possible diff)

```tsx
// components/hero/Hero.tsx, line 9
- className="min-h-screen flex flex-col px-6 md:px-16 lg:px-24 pt-28 pb-20 relative"
+ className="min-h-screen flex flex-col px-6 md:px-16 lg:px-24 pt-28 pb-20 relative overflow-hidden"
```

```tsx
// components/reflections/Reflections.tsx, line 64
- className="py-32 md:py-40 px-6 md:px-16 lg:px-24 relative"
+ className="py-32 md:py-40 px-6 md:px-16 lg:px-24 relative overflow-hidden"
```

```css
/* styles/globals.css — add to html selector (around line 107) */
html {
  overflow-x: clip;            /* modern, doesn't create new scroll context */
  transition: background-color 0.4s ease, color 0.4s ease;
}
```

After those three changes, the "breathing" loop should stop on iOS. Verify with the mobile Safari device toolbar set to iPhone 12 width (390 px).

### E. Belt-and-braces (optional)

On mobile, drop the Reflections enter/exit `x` to 20 (or `mobile? 20 : 40`). The card is already full-width — 40 px of slide adds no perceptual value and just buys you more overshoot risk if you ever change padding.

---

## 5. Recommended order of attack

1. **Fix the mobile shrink/expand bug** (§C7 / §4) — 5 min, launch-blocker.
2. **Ship the OG image** (5 min, biggest social ROI).
3. **Compress reflection + blog + project PNGs to WebP** (1 h, halves your homepage weight).
4. **Self-host or replace Material Symbols** (2 h, unblocks LCP).
5. **Cut HeroDecorations animation count by 60–70 %** and drop `drop-shadow` for `<feGaussianBlur>` (1–2 h, biggest scroll-perf win).
6. **Drop navbar `backdrop-filter` to 16 px**, audit other `glass-panel` uses (30 min).
7. **Add `:focus-visible` styles + skip link** (30 min, hard a11y fix).
8. **Tighten low-contrast / sub-12 px text** (1 h, pure UX/accessibility).

Everything below that is polish.
