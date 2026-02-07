# CLAUDE.md - CmdVault

> An intelligent vault for storing, reusing, and sharing proven commands.

@import README.md
@import package.json

---

## Project Overview

**CmdVault** is a web application designed to store, reuse, and share proven commands. It helps individuals and teams avoid reinventing the wheel by turning effective commands into reusable knowledge.

**Current State**: Frontend-only with mock data, ready for backend integration.

---

## Quick Reference

```bash
# Development
pnpm install          # Install dependencies (MUST use pnpm)
pnpm run dev          # Start dev server at localhost:5173
pnpm run build        # TypeScript check + Vite production build
pnpm run preview      # Preview production build

# Code Quality
pnpm run lint         # Run ESLint
pnpm run format       # Format with Prettier
pnpm run format:check # Check formatting without writing
pnpm run knip         # Detect unused dependencies

# ShadcnUI Components
pnpx shadcn@latest add <component>  # Add new UI component
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19.1.0 |
| Language | TypeScript 5.8 (strict mode) |
| Build | Vite 6.2 with SWC |
| Routing | TanStack Router (file-based) |
| Server State | TanStack Query v5 |
| Client State | Zustand v5 |
| UI Components | ShadcnUI + Radix UI |
| Styling | TailwindCSS 4.1 |
| Forms | React Hook Form + Zod |
| Tables | TanStack Table v8 |
| Charts | Recharts |
| Icons | Tabler Icons (primary), Lucide React (secondary) |
| i18n | i18next (en, fr) |
| HTTP | Axios |

---

## Architecture

### Directory Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # ShadcnUI base components (managed by CLI)
│   ├── layout/          # Sidebar, header, navigation
│   ├── charts/          # Chart components
│   └── shared/          # Cross-feature components
├── features/            # Feature-based modules (self-contained)
│   ├── admin/           # Admin dashboard
│   │   └── pages/       # Each page has: components/, context/, data/
│   ├── auth/            # Authentication flows
│   ├── landing_page/    # Public-facing pages
│   └── errors/          # Error pages (401, 403, 404, 500, 503)
├── routes/              # TanStack Router routes
│   ├── _authenticated/  # Protected routes with sidebar
│   ├── _public/         # Public routes
│   └── (auth)/          # Auth route group
├── stores/              # Zustand stores (authStore.ts)
├── context/             # React Context (theme, font, search)
├── hooks/               # Custom hooks
├── types/               # TypeScript type definitions
├── lib/                 # Utilities (cn(), etc.)
├── utils/               # Helper functions
├── i18n/                # Translation files (en.json, fr.json)
└── routeTree.gen.ts     # AUTO-GENERATED - never edit manually
```

### Key Patterns

#### Feature Module Structure
Each complex feature follows this pattern:
```
features/[name]/
├── pages/
│   └── [page-name]/
│       ├── index.tsx        # Main page component
│       ├── components/      # Page-specific components
│       ├── context/         # Page-level state
│       └── data/            # Types, schemas, mock data
└── components/              # Shared feature components
```

#### Routing
- **File-based routing** via TanStack Router Vite plugin
- **Layout routes**: `_authenticated` (sidebar), `_public` (no auth)
- **Route tree** auto-generated at `src/routeTree.gen.ts`
- **Type-safe navigation** with Link component

#### State Management
- **Zustand** → Global client state (auth, user)
- **TanStack Query** → Server state, caching, mutations
- **React Context** → UI state (theme, sidebar, search)

#### Authentication
1. User signs in via `/sign-in`
2. Token stored in cookies (`js-cookie`)
3. Token managed in `useAuthStore`
4. Protected routes check auth in `_authenticated` layout
5. 401 errors auto-logout and redirect

---

## Code Conventions

### Imports
Use path alias `@/` for all imports from `src/`:
```typescript
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/authStore'
```

Import order (enforced by Prettier):
1. React/built-in modules
2. External packages
3. `@/` aliased imports
4. Relative imports

### Components
- Functional components only
- Props typed with TypeScript interfaces
- Use `cn()` for conditional class names
- ShadcnUI components in `src/components/ui/`

### Styling
- TailwindCSS utility classes
- Semantic colors via CSS variables (primary, secondary, muted, etc.)
- Dark mode via `class` strategy
- Mobile-first responsive design

### Forms
- React Hook Form for state
- Zod schemas for validation
- `@hookform/resolvers/zod` for integration

### Error Handling
- Global query error handler in `main.tsx`
- Toast notifications via Sonner
- Error pages for 401, 403, 404, 500, 503

---

## Anti-Patterns (Avoid)

1. **No console.log** - ESLint error (use `// eslint-disable-next-line no-console` for debug)
2. **No unused variables** - Prefix with `_` if intentionally unused
3. **Never edit `routeTree.gen.ts`** - Auto-generated by router plugin
4. **Never use npm/yarn** - pnpm only
5. **Don't modify `src/components/ui/`** - Managed by ShadcnUI CLI
6. **No hardcoded colors** - Use Tailwind semantic colors

---

## Debugging

```bash
# Check for TypeScript errors
pnpm run build

# Check for lint errors
pnpm run lint

# Check for unused dependencies
pnpm run knip

# Check formatting
pnpm run format:check

# View route tree
cat src/routeTree.gen.ts

# Check Zustand state in browser
# Open React DevTools → Components → Search "useAuthStore"
```

---

## API Integration Points

All API calls are marked with `// TODO: Replace with API call`:

```typescript
// Auth
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout

// Commands (CmdVault core)
GET    /api/commands
POST   /api/commands
PATCH  /api/commands/:id
DELETE /api/commands/:id

// Members
GET    /api/members
POST   /api/members
PATCH  /api/members/:id
DELETE /api/members/:id

// Events
GET    /api/events
POST   /api/events
PATCH  /api/events/:id
DELETE /api/events/:id
```

---

## Compact Instructions

When working in this codebase:
- Use pnpm exclusively
- Follow feature-based architecture
- Keep components in their feature folders
- Use ShadcnUI for new UI components
- Validate forms with Zod
- Handle errors with toast notifications
- Use TanStack Query for data fetching
- Use Zustand for global client state

---

## Context Management

- `/clear` - Start fresh conversation
- `/compact` - Compress context when working on large features
- `/rewind` - Undo recent changes

Use `/clear` when:
- Switching between unrelated features
- After completing a major task
- Context feels cluttered

Use `/compact` when:
- Working on large refactors
- Multiple file changes in one session
- Approaching context limits
