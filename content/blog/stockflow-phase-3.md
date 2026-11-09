---
title: "StockFlow Phase 3: The Revamp"
slug: "stockflow-phase-3"
excerpt: "I said I'd clean up the UI before adding features. It turned into a rebuild of the whole app: a new frontend and design system, online orders, a stock ledger, per-action access control, 25 reports and a page that watches its own API."
date: "2026-11-10"
label: "Engineering Notes"
tags: ["StockFlow", "Angular", "Node.js", "PostgreSQL", "System Design"]
cover: "/blog/stockflow-phase-3/cover-revamp.jpg"
coverVideo: "/blog/stockflow-phase-3/cover-loop.mp4"
featured: true
published: true
---

At the end of Phase 2 I wrote that the UI worked but I wasn't happy with it, and that I would **step back and clean it up** before adding anything else.

That cleanup turned into a revamp. Once I looked closely, the UI was the least of it. The frontend was hard to extend, the server trusted things it shouldn't have, and the stock numbers couldn't explain themselves. So I rebuilt StockFlow properly, one piece at a time, and then built what I had promised next: *online orders* and *reports*.

This post covers all of it: why I rebuilt it, how I worked, and the decisions behind each part.

!video[StockFlow Phase 3 in a minute](/blog/stockflow-phase-3/stockflow-phase-3.mp4)

Live demo: [sakib963.github.io/stock-flow-web](https://sakib963.github.io/stock-flow-web/). Sign in as a guest. The guest account can look at most of the app but can't change any data.

## Why a rebuild and not a cleanup

Three things pushed it past a cleanup.

**The frontend was generated from config.** Every page came out of one generator. That was fast to start, but every new feature needed another escape hatch in the generator, and the pages still hand-wrote their own search, loading, paging and breadcrumbs. Changing how lists behaved meant changing it in many places.

**The server had no permission system.** A user's role was a string. The frontend used it to choose a landing page, and no route on the server ever read it. Any signed-in person could call any endpoint, including the one that creates users. Some older endpoints also trusted totals sent by the browser.

**Stock had no history.** The old tables stored how much was on the shelf, not how it got there. When a number looked wrong, there was nothing to read back.

None of these can be fixed by restyling pages. So I started the Angular app again from a fresh scaffold and moved the business logic across page by page, rebuilding each server module as its page arrived. The old branches stayed untouched as the reference, so nothing had to be rebuilt from memory.

## How I worked

The rebuild only held together because of a few habits I set early.

- **Vertical slices.** A module is built one feature at a time: its server, its page and a click-through, finished before the next one starts. Building a whole module's server first means rewriting endpoints once the pages show what they actually need.
- **A decision log.** Every decision that settles how something works is written down the day it's made, with the reason. Entries are never edited. If one is reversed, a new entry says which one it replaces and why. It stops closed questions from being argued again, and old ones from being reversed quietly.
- **A document for every feature.** Each feature has a document with a fixed structure: introduction, scope, requirements, business logic, edge cases, failure modes, verification. They're written in Markdown and built into HTML pages, and a missing section fails the build. Documentation that's optional stops getting written.
- **Rules a machine can check, checked by a machine.** Conventions are enforced by hooks on the lines just written, and every commit runs the build and tests. A rule that depends on someone remembering it breaks without anyone noticing.
- **Two reviews per feature.** One for conventions and one for business rules. A business rule slip doesn't look like messy code. It looks like wrong stock or wrong money, so it gets its own reviewer.

## The design system, built in rounds

Instead of one big design brief, I built the design system in rounds, one page type at a time, each round building on the last one's handoff. The app shell came first and settled the foundations: colour, type, spacing and density. Then tables and states. Then records: list, detail and form.

A few rules came out of those rounds that I'd keep in any app now.

**Lists are config-driven. Forms are not.** Fifteen list pages are really one page with different columns, so every list is one shell driven by a config made of five shared pieces: a page header, a status tag, a filter, a table and the list shell itself. Configs are pure data, so they could live in a database later. Forms share an idiom, not a shape. A config that has to describe a `FormArray` stops being data and becomes a worse Angular, so create, edit and detail pages are hand-written components.

**Every create and every edit is its own route.** There's no rule like "five fields or fewer opens in a modal". A rule like that moves a screen to a different surface the day someone adds a sixth field. One route per page is also one place to link to, come back to and guard.

**Loading never flashes.** Every list request goes through one stream: typing is debounced at 300 ms and other triggers at 150 ms, and a newer request cancels an older one. Once a skeleton appears, it stays for at least 400 ms, and a refetch dims the rows instead of swapping in a skeleton. A list also remembers its page, sort, search and filters per browser tab, so leaving for a record and coming back lands on the same list.

**Two languages, done properly.** The app runs in English and Bangla. In Bangla, counts, money and dates use Bangla digits, but codes, batch numbers and invoice numbers stay in Western digits, because staff read them out and match them against a label or a courier's sheet. The wording uses what people actually say at a counter, not textbook translations.

## Online orders

![The online order form, filled from a pasted chat message](/blog/stockflow-phase-3/ui-online-order.jpg)

Counter sales and online orders are separate pages, because different people do them in different ways. Underneath, both write to **one orders table**, and a row only counts as a sale once stock has left. Facts that only matter online (couriers, delivery attempts, addresses) live in their own table beside it, so online selling can keep growing without slowing down the counter.

**Paste to fill.** An online order usually starts as a chat message. In StockFlow you paste the message, and it reads out the phone, the name and the address. It's rule-based, with no language model, so there's no cost per order. The phone comes first: a returning customer brings their saved addresses with them. There is one customer per normalised phone number, and each address carries its own recipient, which handles a shared family phone or a gift. A location is required on every online order, but the helper only suggests candidates and never picks one on its own, because the same area name exists in more than one district.

**An order has several statuses, not one.** The stage of the order, the delivery status, the payment status and the refund status are separate fields. One combined status would need a value for every combination, and people would read it two ways. A separate `sold_on` field marks the moment an order became a sale, whichever path it took.

**A parcel leaves only in a delivery batch.** A day's parcels go to the courier as one batch per pickup. The batch produces the courier's upload file and labels, and "Handed to courier" dispatches every order in it. With one way out, the file, the labels and the handover can't disagree, and the same order can't go out twice.

![A delivery batch with its courier file, labels and timeline](/blog/stockflow-phase-3/ui-delivery-batch.jpg)

Pre-orders live in their own tables until they're converted, so a booking for stock the shop doesn't hold never counts as revenue or holds stock. Returns are created Pending, and a separate confirm moves the stock, so a mistyped return can be cancelled before anything changes. Partial returns reverse exactly the units that came back.

## Stock you can trace

![Every sale, dispatch and return writes a movement row](/blog/stockflow-phase-3/video-04-stock-ledger.jpg)

This is the part I'm most glad I rebuilt.

**Every change to a batch's quantity writes a `stock_movement` row in the same transaction**, through one set of shared stock helpers. Sales, online dispatches, returns, purchase orders, adjustments and disposals all go through them. Each row records the quantity in or out and what was left after. History starts at the migration with one carried-over row per batch, because the old tables never stored the balance before a change, and a reconstructed history would have been a guess.

![The stock movement log for one product](/blog/stockflow-phase-3/ui-stock-movements.jpg)

A few rules sit around the ledger:

- Stock enters only when a delivery is verified. Saving, submitting and editing a purchase order never touch it.
- Any document that moves stock is saved with one click and approved with another, from its record page. Even when the owner does both, the second click is a second look.
- An approved adjustment is never undone. A mistake is fixed by a new adjustment, because the ledger has already recorded the first one.
- Batch codes look like `B-7KQ2-M9XD`: eight Crockford base 32 characters, made by scrambling the next value of a database sequence with a reversible step. They read as random, never repeat, and searching one finds exactly one batch.
- Money on stock pages is filtered by field. The server leaves out buying price, value and profit for a role without permission to see them. Hiding a column while the data still reaches the browser hides nothing.

The line on the sign-in page sums up the goal: the stock on the screen is the stock on the shelf.

## Access per action, not per role name

![A role is a set of actions](/blog/stockflow-phase-3/video-05-access-actions.jpg)

With no permission system to extend, I designed one from scratch.

- **A permission is one code: `module.feature.action`.** The actions are domain verbs (`confirm`, `dispatch`, `deliver`, `refund`, `approve`), not just create, read, update and delete. "May raise a purchase order but not approve it" is a real business rule, and a plain "edit" permission can't express it.
- **A role is just a named set of codes.** Nothing checks the role's name. In the demo, the Staff role can confirm and cancel orders but can't dispatch, deliver or export them, because those boxes are unticked, not because it's called Staff.

![Editing the Staff role: Dispatch, Deliver and Export unticked](/blog/stockflow-phase-3/ui-role-editor.jpg)

- **The server checks every guarded request.** `requirePermission(...)` runs after the JWT middleware and answers 403, not 401. A 401 signs you out, and signing someone out over a button they shouldn't have seen is wrong. The check fails closed, and a permission code that was never seeded denies everyone, so a typo fails safe.
- **The server filters the menu too.** If you can't view a feature, it isn't sent to the browser at all. It's absent, not greyed out. The frontend guard and `can()` exist for the interface only, because hiding a button doesn't protect an endpoint.

![The same app as Owner and as Staff](/blog/stockflow-phase-3/ui-owner-vs-staff.jpg)

- **Access arrives in one cheap call.** On load, the app gets the user, business, permissions and menu in one payload, revalidated with an ETag. An unchanged reload costs one indexed read and comes back with no body.
- **Changes reach every open tab without sockets.** Changing a role or a grant raises a config version in the same transaction. Every signed-in response carries it in a header, so a tab that sees a newer version reloads its payload on its next request. No polling, and it works on serverless hosting where every instance has its own memory.

Sessions got the same treatment. Access tokens live 15 minutes, and a session lasts at most three days however often it renews. Resetting a password ends every session. Signing out of a device waits for the server to confirm before anything is forgotten, so a failed sign-out never leaves a live refresh token nobody can see.

Every change in the app lands in an **activity log**: who did what, when, on which device and from where. Entries that touch money, stock, roles or sign-ins are flagged "Worth a look", which comes to about one entry in ten.

![The activity log recording a role change](/blog/stockflow-phase-3/ui-activity-log.jpg)

## Reports, and a page that watches the app

There are 25 reports in four groups. *Sales:* register, daily sales, sales by product, profit by category, returns, customer dues, COD held by couriers, pre-order deposits. *Stock:* on hand, movement summary, reorder list, expiring stock, purchases received, supplier dues, disposals, adjustments. *Customers:* the list, by district, by age and gender, and customers who've gone quiet. *Marketing:* sales by source, campaign costs, partner payments and dues, giveaways. Each one can be downloaded, and each group sits behind its own view and export permissions.

![Profit by category for October](/blog/stockflow-phase-3/ui-profit-report.jpg)

A report counts what the customer kept. A full return adds nothing, a partial return counts only the units kept, and a return comes off the month of the original sale. Delivery charges are the courier's money, so they never count as sales or profit anywhere.

**System health** is an admin-only page that watches the app itself: usage, the speed of every API route including the slow tail, every request with who made it and what the answer was, crashes, security, and database size and connections. Some requests in the log say "Unchanged": that's the ETag doing its job. The server had nothing new, so it sent nothing.

![System health: every request, who made it, and the answer](/blog/stockflow-phase-3/ui-system-health.jpg)

## What changed for me

The features are what you see in the video. The bigger change was how I build.

Writing every decision down with its reason made me slower for a day and faster for the rest of the rebuild. Splitting work into vertical slices meant I always had something to click through, which is how I catch wrong assumptions. And most of the bugs worth worrying about weren't in the UI. They were in the rules about money and stock, which is why those now have their own review, their own ledger and their own tests.

## What's next

Product variants, and moving stock between warehouses and aisles. Both are planned, and the stock helpers already route every movement through one place, so they can be added without the data changing meaning.

## Stack

Angular with NG-ZORRO on the frontend, Node.js with Express 5 on the server, PostgreSQL underneath.

Live demo: [sakib963.github.io/stock-flow-web](https://sakib963.github.io/stock-flow-web/). Sign in as a guest.

If you have thoughts on any of these decisions, I'd like to hear them.
