---
title: "The Database Bug"
slug: "the-database-bug"
excerpt: "A connection that looked alive. It was not. Notes on pools, retries, and designing for failure."
date: "2026-01-15"
label: "Engineering Notes"
tags: ["PostgreSQL", "Node.js", "Vercel", "Debugging"]
cover: "/blog/the-database-bug.png"
featured: true
published: true
---

I was working on a fairly normal backend project. Node.js with Express, PostgreSQL hosted on Aiven, and the API deployed on Vercel. Nothing experimental. Nothing fancy. Just a practical stack for a small management system.

And yet, I kept running into a problem that made no sense.

Sometimes everything worked perfectly. The API would connect to the database, login would succeed, queries would run, and the system felt stable. Then, without any code changes, things would suddenly break. A request would fail. The database would *disconnect*. Refreshing sometimes fixed it. Other times it didn't. Then later, it would magically start working again.

**The worst part?** This wasn't only happening on Vercel. It was happening on my local machine too.

That is when debugging becomes exhausting. When an issue happens only in production, you blame deployment. When it happens only locally, you blame your environment. But when it happens everywhere, intermittently, with no clear pattern, you start doubting everything.

I checked my queries, environment variables, Aiven's dashboard and Vercel logs. Nothing looked obviously wrong. At that point, it felt like infrastructure chaos. But the real issue was much closer to home.

## The assumption I didn't know I was making

Like many people building their first backend systems, I had an implicit mental model.

> The app starts. It connects to the database. The connection stays alive.

That model works in many traditional server environments. You spin up a long running process, establish a connection pool, and trust it.

So that is exactly what I did. I created a PostgreSQL pool once and reused it everywhere. No reconnection logic. No recovery strategy. Just connect and use. The problem is real systems do not behave like that.

Connections can drop for reasons completely outside your code:

- *Network hiccups*
- *Idle timeouts*
- *TLS issues*
- *Processes pausing and resuming*
- *Serverless environments freezing execution*
- *Temporary DNS weirdness*

When that happens, your application can still hold a connection object that looks valid, but underneath, the socket is already dead. And if your code does not know how to recover, it will happily keep using that broken connection again and again. That was my bug. A missing recovery strategy.

## What I changed

The fix wasn't dramatic. I didn't rewrite the project. I didn't change the database provider. I didn't move away from Vercel. I simply stopped treating the database connection as something permanent.

Concretely, I made a few architectural changes.

- *I ensured there was only one shared connection pool per runtime, instead of multiple accidental pools.*
- *I wrapped all database access in a small layer that could detect fatal connection errors.*
- *When a fatal error occurred, I explicitly destroyed the pool and created a new one.*
- *After recreating the connection, I retried the failed query once.*

That is all. No exotic infrastructure. Just acknowledging that connections are fragile and building for recovery. The random failures disappeared, both locally and on Vercel. When something did go wrong, the system healed itself instead of collapsing.

## The real lesson

This experience didn't teach me anything new about PostgreSQL. It didn't teach me anything new about Express. It didn't even teach me much about Vercel. What it changed was how I think about systems.

I used to assume stability and treat failure as an exception. Now I assume failure and treat recovery as part of the design.

That shift is subtle, but it is foundational. Because once you start seeing connections, networks, processes, and dependencies as things that will eventually fail, you naturally start writing more resilient software.

And honestly, that is a far more valuable lesson than fixing a single bug.
