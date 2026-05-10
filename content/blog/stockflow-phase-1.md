---
title: "StockFlow Phase 1 is Live"
slug: "stockflow-phase-1"
excerpt: "First demo of StockFlow. Categories, suppliers, warehouses. The boring foundation everything else depends on."
date: "2025-05-15"
label: "Engineering Notes"
tags: ["StockFlow", "Angular", "Express.js", "PostgreSQL", "Side Project"]
cover: "/blog/stockflow-phase-1.png"
featured: false
published: true
---

I am super excited, and a little relieved, to finally release the demo version of StockFlow, my inventory and warehouse management system.

Live demo: [sakib963.github.io/stock-flow-web](https://sakib963.github.io/stock-flow-web/). Guest credentials are `guest@stockflow.com` / `stockflow123`.

This project has been a huge learning experience for me. Despite managing a full time job, I dedicated focused hours to building Phase 1, laying the foundation for a structured and efficient inventory management system. Here is what has been accomplished so far.

## What's done

- **Category and subcategory management.** Organize products easily.
- **Supplier and product management.** Keep track of where supplies are coming from.
- **Warehouse and aisle/zone setup.** A structured way to store and locate inventory.
- **Inventory management.** Purchase multiple products, manage batches, and receive restock alerts to avoid shortages.

## Tech stack

- **Frontend:** Angular, Tailwind CSS, NgZorro, TypeScript
- **Backend:** Express.js, PostgreSQL, JWT, Express Joi Validation
- **Database:** PostgreSQL hosted on Aiven
- **Deployment:** frontend on GitHub Pages via `angular-cli-ghpages`, backend on Vercel

## Challenges I faced

**Time management.** Balancing this project with my full time job was a challenge, requiring disciplined effort and planning.

**Finding a free cloud PostgreSQL database.** Many cloud providers have limitations, and I needed a free option that allowed direct JDBC connectivity. After extensive searching, I finally found Aiven, which worked perfectly.

**Defining the project's scope and business logic.** Without predefined requirements, I had to carefully decide what features were necessary and how the system should function. This involved research, iteration, and refining the approach based on real world inventory management needs.

**UI/UX.** I wanted a clean interface, but I kept revising layouts and workflows to get them just right. Finding the right balance between simplicity and functionality took time.

## What's next

The next big milestone is an e-commerce platform, where StockFlow will be responsible for inventory and order management. This will integrate both projects into a unified ecosystem for business owners.

I would love to collaborate with other developers, designers, or anyone interested in this project. Whether it is coding, UI/UX improvements, testing, or feature suggestions, let us build something impactful together.
