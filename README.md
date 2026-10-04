# B+ Wellness Café Digital Platform

> **By Mineiro Coffee**  
> Starbucks-grade digital café experience featuring Order Ahead, Store Operations (KDS), Admin HQ, and an AI Barista grounded in PostgreSQL + pgvector.

---

## 🏛️ Platform Architecture & Documentation Index

This repository is structured as a **Modular Monolith First** monorepo designed for high developer velocity, zero unnecessary distributed complexity, and multi-store readiness.

### 📚 Phase 0 Foundation Documentation

All core architectural decisions, product definitions, risk registers, and employer decision logs are maintained under [`docs/`](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/):

#### Product Specifications
- 📋 [**Product Definition**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/product/PRODUCT_DEFINITION.md): Vision, personas, platform components, core features, MVP scope, and out-of-scope boundaries.
- 📌 [**Assumptions Register**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/product/ASSUMPTIONS.md): Known business and technical assumptions (ASM-01 to ASM-12).
- ❓ [**Employer Decision Log**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/product/EMPLOYER_DECISION_LOG.md): Critical business/legal decisions pending employer review (DEC-01 to DEC-13).
- 🛡️ [**Risk Register**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/product/RISK_REGISTER.md): Risk matrix covering RISK-01 (Real Money Wallet) through RISK-09 (Availability Sync).

#### Architecture & ADRs
- 🏗️ [**Architecture Overview**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/ARCHITECTURE_OVERVIEW.md): System context diagram, tech stack, and component interactions.
- 📐 [**Domain Boundaries**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/DOMAIN_BOUNDARIES.md): Domain definitions for Auth, Users, Stores, Menu, Orders, Payments, Rewards, Wallet, Notifications, and AI.
- 📄 [**ADR-001: Modular Monolith First**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/ADR-001-MODULAR-MONOLITH.md): Why modular monolith over microservices.
- 📄 [**ADR-002: Payment Abstraction & Idempotency**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/ADR-002-PAYMENT-ABSTRACTION.md): Provider-agnostic payment gateway and idempotency design.
- 📄 [**ADR-003: POS Integration Adapter**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/ADR-003-POS-ADAPTER.md): KDS Store Operations and future external POS adapter.
- 📄 [**ADR-004: AI Menu Grounding & Guardrails**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/ADR-004-AI-MENU-GROUNDING.md): Grounded recommendation architecture with hallucination reduction using PostgreSQL + pgvector.

#### UX Architecture & User Flows (Phase 1)
- 🧭 [**Information Architecture**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/INFORMATION_ARCHITECTURE.md): Cross-platform IA tree across Mobile, KDS, and Admin.
- 📱 [**Customer User Flow**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/CUSTOMER_USER_FLOW.md): End-to-end 14-step Order Ahead journey and decision gates.
- 🤖 [**AI Barista User Flow**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/AI_BARISTA_USER_FLOW.md): Grounded conversational recommendation journey.
- ☕ [**Store Operations (KDS) Flow**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/STORE_OPERATIONS_FLOW.md): Order board, state machine transitions, and 86 stock toggle.
- 🖥️ [**Admin Panel Flow**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/ADMIN_FLOW.md): 8 admin management screens and 7-tab product form.
- 📋 [**Screen Inventory**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/SCREEN_INVENTORY.md): Comprehensive inventory of 23 mobile, 2 KDS (+1 modal), and 8 admin screens with state coverage.
- ⚠️ [**Edge Cases & Failure Modes**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/EDGE_CASES.md): 12 critical failure modes, network drops, stock drift, and UX recovery.
- 🔄 [**State Architecture**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/STATE_ARCHITECTURE.md): Client state slices, server authority, and lifecycle state matrix.

#### Contracts & Specifications (Phase 1)
- 📝 [**Frontend Data Requirements**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/contracts/FRONTEND_DATA_REQUIREMENTS.md): Request payloads, JSON contracts, Cart models, and validation rules.
- 🌐 [**REST API Blueprint**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/contracts/API_BLUEPRINT.md): 43 endpoints across 13 domains.
- 📐 [**Domain Models Draft**](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/contracts/DOMAIN_MODELS_DRAFT.md): Conceptual TypeScript draft entities and invariants.

---

## 🗂️ Monorepo Structure

```
bplus-platform/
├── apps/
│   ├── mobile/         # React Native (Expo) iOS & Android Customer App
│   ├── admin/          # Next.js Management & Menu Admin Console
│   └── store-ops/      # Next.js Tablet-optimized Kitchen Display (KDS)
├── backend/
│   └── api/            # NestJS Modular Monolith REST API
├── packages/
│   ├── types/          # Shared TypeScript contracts & DTOs
│   ├── config/         # Shared ESLint, Prettier, TypeScript configurations
│   └── ui/             # Shared design tokens & UI components
└── docs/
    ├── product/        # Product vision, scope, assumptions, decisions, risks
    ├── architecture/   # Architecture overview, ADRs, domain boundaries
    ├── ux/             # Information architecture, user flows, screen inventory, edge cases
    └── contracts/      # API blueprint, data requirements, draft domain models
```

---

## 🚦 Project Roadmap & Phase Status

1. **PHASE 0: Product Discovery & Architecture** — ✅ **FROZEN**
2. **PHASE 1: Product Architecture & UX Blueprint** — ✅ **HARDENED & READY TO FREEZE**
3. **PHASE 2: HIGH-FIDELITY UI/UX + INTERACTIVE PROTOTYPE** — ⏳ *Next Phase*
4. **PHASE 3: TECHNICAL FOUNDATION** — 📅 *Upcoming*
5. **PHASE 4: BACKEND CORE** — 📅 *Upcoming*
6. **PHASE 5: CUSTOMER MOBILE APP** — 📅 *Upcoming*
7. **PHASE 6: STORE OPERATIONS + ADMIN** — 📅 *Upcoming*
8. **PHASE 7: PAYMENT INTEGRATION** — 📅 *Upcoming*
9. **PHASE 8: AI BARISTA IMPLEMENTATION** — 📅 *Upcoming*
10. **PHASE 9: SECURITY + HARDENING** — 📅 *Upcoming*
11. **PHASE 10: PILOT + EMPLOYER DEMO** — 📅 *Upcoming*
