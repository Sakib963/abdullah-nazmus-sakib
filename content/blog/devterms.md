---
title: "DevTerms: For Every Word You Quietly Googled"
slug: "devterms"
excerpt: "Small glossary for the words devs throw around without explaining. Plain English, real examples, $0 a month."
date: "2026-04-13"
label: "Engineering Notes"
tags: ["Next.js", "TypeScript", "ISR", "Side Project"]
cover: "/blog/devterms.jpg"
featured: false
published: true
---

You know that moment in a standup when someone says a word, everyone nods, and you nod too, but inside you are quietly opening a new tab.

Yeah. I built something for that moment.

It is called **DevTerms**. One click, one term, one story. The words devs throw around without explaining, pulled up in seconds, written in plain English, with a real example so it actually sticks.

## Why I built it

I was tired of pretending I knew what a word meant and Googling it 20 minutes later in private. And I was tired of dictionaries that read like they were written by a compiler. So I made the opposite of both.

## How it is built (the part I had the most fun with)

1. **Next.js** 16 on Vercel, App Router, TypeScript
2. Google Sheets as the database, read through a Service Account
3. 7 day **ISR cache** so the Sheets API barely gets touched
4. On-demand revalidation endpoint for instant updates
5. Share-as-image export using the Canvas API, 1080x1080, ready for Slack or socials
6. SEO friendly per-term pages at `/term/[slug]` with Open Graph tags
7. Total monthly cost: **$0**

The whole thing runs on a spreadsheet I can edit from my phone. Add a row, hit refresh, it is live in production. No CMS, no database bill, no backend to babysit.

It is a small project. But small projects are how I think out loud, and this one is genuinely useful to me every week.

If you have ever silently Googled a word mid-meeting, you already know who this is for.

Try it: [dev-terms.vercel.app](https://dev-terms.vercel.app/).

And if there is a term you keep hearing and secretly hate, drop it in the comments. I will add it to the sheet tonight.
