# CmdVault - Store, Reuse & Share Proven Commands

**Live Demo:** https://cmd-vault-eqvidsovn-yobson-devs-projects.vercel.app/
<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase" alt="Supabase" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS" />
</div>

<br />

An intelligent vault for developers to store, organize, reuse, and share proven commands. Stop reinventing the wheel — turn effective commands into reusable, searchable knowledge.

## Table of Contents

- [About](#about)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Database Schema](#database-schema)
- [Architecture](#architecture)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## About

**CmdVault** helps individuals and teams build a personal and shared library of commands they actually use. Instead of digging through shell history or searching Stack Overflow for the same command again, save it once and find it instantly.

- **For individuals** — Save commands with descriptions, tags, and metadata. Search and filter by language, category, or keyword. Copy with one click.
- **For teams** — Share commands with team members. Discover proven commands from the community via the Explore page.

## Key Features

### Command Vault

- Full CRUD for commands with title, description, command text, language, category, and visibility
- Tag system with custom colors for organization
- Favorite commands for quick access
- Usage count tracking
- Copy-to-clipboard with one click

### Explore & Share

- Browse public commands shared by the community
- Filter by language, category, or keyword
- Sort by recent, popular, or most used

### Teams

- Create teams and invite members
- Share commands at team-level visibility
- Role-based access (admin, member)

### Dashboard

- Overview of your vault: total commands, favorites, languages used, commands this month
- Monthly trend chart of commands saved
- Recent commands list

### Settings

- **Profile** — Edit display name, view email
- **Appearance** — Light/dark theme, font selection
- **Command Defaults** — Set default language, category, and visibility for new commands
- **Security** — Change password
- **Export** — Download all commands as JSON
- **Danger Zone** — Delete all commands or delete account

### Authentication

- Email/password sign-in and sign-up via Supabase Auth
- GitHub OAuth
- Password recovery flow
- OTP verification
- Protected routes with automatic session management

### Other

- Light and dark mode
- Global search (command palette)
- i18n foundation (English, French)
- Responsive design (mobile-first)
- Error pages (401, 403, 404, 500, 503)

## Tech Stack

| Layer         | Technology                         |
| ------------- | ---------------------------------- |
| Framework     | React 19.1.0                       |
| Language      | TypeScript 5.8 (strict mode)       |
| Build         | Vite 6.2 with SWC                  |
| Backend       | Supabase (Auth + PostgreSQL + RLS) |
| Routing       | TanStack Router (file-based)       |
| Server State  | TanStack Query v5                  |
| Client State  | Zustand v5                         |
| UI Components | ShadcnUI + Radix UI                |
| Styling       | TailwindCSS 4.1                    |
| Forms         | React Hook Form + Zod              |
| Tables        | TanStack Table v8                  |
| Charts        | Recharts                           |
| Icons         | Tabler Icons, Lucide React         |
| i18n          | i18next                            |
| Notifications | Sonner                             |

## Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── ui/                 # ShadcnUI base components (managed by CLI)
│   ├── layout/             # Sidebar, header, navigation
│   └── ...                 # Shared components (confirm-dialog, search, etc.)
├── features/               # Feature-based modules
│   ├── commands/           # Core: command CRUD, data table, drawer
│   │   ├── components/     # DataTable, mutate drawer, dialogs
│   │   ├── context/        # Commands page state
│   │   ├── data/           # Schema, languages, categories
│   │   ├── hooks/          # useCommandsQuery, useTagsQueries
│   │   └── services/       # Supabase service calls
│   ├── explore/            # Public command discovery
│   ├── favorites/          # Favorited commands view
│   ├── tags/               # Tag management
│   ├── teams/              # Team collaboration
│   ├── admin/              # Dashboard + settings
│   │   └── pages/
│   │       ├── dashboard/  # Analytics overview
│   │       └── settings/   # Profile, appearance, security, etc.
│   ├── auth/               # Sign-in, sign-up, forgot-password, OTP
│   ├── landing_page/       # Public homepage and info pages
│   └── errors/             # Error pages (401, 403, 404, 500, 503)
├── routes/                 # TanStack Router file-based routes
│   ├── _authenticated/     # Protected routes (requires session)
│   ├── _public/            # Public routes
│   └── (auth)/             # Auth route group (sign-in, sign-up, etc.)
├── stores/                 # Zustand stores (authStore)
├── context/                # React Context (theme, font, search)
├── hooks/                  # Custom hooks (useCommandDefaults, etc.)
├── types/                  # TypeScript types (database.types.ts)
├── lib/                    # Utilities (supabase client, cn())
├── i18n/                   # Translation files (en.json, fr.json)
└── routeTree.gen.ts        # Auto-generated by TanStack Router (do not edit)

supabase/
└── migrations/             # SQL migrations for database schema & RLS
```

## Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** 8+ (required, do not use npm/yarn)
- A **Supabase** project ([create one here](https://supabase.com/dashboard))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/cmdvault.git
   cd cmdvault
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your Supabase credentials (see [Environment Variables](#environment-variables)).

4. **Apply database migrations**

   ```bash
   npx supabase login
   npx supabase link --project-ref <your-project-ref>
   npx supabase db push
   ```

   This creates all tables, RLS policies, and triggers in your Supabase project.

5. **Start the development server**

   ```bash
   pnpm run dev
   ```

6. **Open** http://localhost:5173

## Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Get these values from your Supabase project dashboard under **Settings > API**.

## Available Scripts

```bash
pnpm run dev          # Start dev server at localhost:5173
pnpm run build        # TypeScript check + Vite production build
pnpm run preview      # Preview production build locally
pnpm run lint         # Run ESLint
pnpm run format       # Format code with Prettier
pnpm run format:check # Check formatting without writing
pnpm run knip         # Detect unused dependencies/exports
```

## Database Schema

CmdVault uses Supabase (PostgreSQL) with Row Level Security. Migrations are in `supabase/migrations/`.

### Tables

**profiles** — Extends Supabase `auth.users`, auto-created on signup via trigger.
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, FK to auth.users |
| email | text | |
| full_name | text | |
| avatar_url | text | |
| created_at | timestamptz | |
| updated_at | timestamptz | |

**commands** — Core table for stored commands.
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| title | text | |
| description | text | nullable |
| command_text | text | The actual command |
| language | text | bash, python, sql, powershell, javascript, other |
| category | text | cli, script, prompt, workflow, process, snippet |
| visibility | text | private, team, public |
| user_id | uuid | FK to profiles |
| is_favorite | boolean | |
| usage_count | integer | |
| created_at | timestamptz | |
| updated_at | timestamptz | |

**tags** — User-created tags with optional color.
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| name | text | unique |
| color | text | hex color, nullable |
| created_at | timestamptz | |

**command_tags** — Many-to-many junction between commands and tags.
| Column | Type |
|--------|------|
| command_id | uuid |
| tag_id | uuid |

**teams** — Team groups for collaboration.
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| name | text | |
| description | text | nullable |
| created_by | uuid | FK to profiles |
| created_at | timestamptz | |
| updated_at | timestamptz | |

**team_members** — Team membership with roles.
| Column | Type | Notes |
|--------|------|-------|
| team_id | uuid | FK to teams |
| user_id | uuid | FK to profiles |
| role | text | admin, member |
| joined_at | timestamptz | |

### Row Level Security

All tables have RLS enabled. Key policies:

- Users can only modify their own commands, profile, and tags
- Public-visibility commands are readable by all authenticated users
- Team-visibility commands are readable by team members
- Team data is scoped to members of that team

## Architecture

### State Management

| Type                | Tool            | Purpose                                |
| ------------------- | --------------- | -------------------------------------- |
| Global client state | Zustand         | Auth session, user                     |
| Server state        | TanStack Query  | Commands, tags, teams, dashboard stats |
| UI state            | React Context   | Theme, font, search                    |
| Feature state       | React Context   | Dialog open/close, selected row        |
| Form state          | React Hook Form | Form inputs, validation                |

### Routing

File-based routing via TanStack Router with two layout groups:

- **`_authenticated`** — Wraps all protected pages with sidebar layout. Checks session in `beforeLoad`; redirects to `/sign-in` if unauthenticated.
- **`(auth)`** — Auth pages (sign-in, sign-up, forgot-password, OTP) with a dedicated auth layout.

The route tree is auto-generated at `src/routeTree.gen.ts` by the TanStack Router Vite plugin. Never edit this file manually.

### Feature Module Pattern

Each feature follows a consistent structure:

```
features/<name>/
├── index.tsx           # Main page component
├── components/         # Feature-specific components
├── context/            # Dialog/selection state
├── data/               # Zod schemas, types, constants
├── hooks/              # TanStack Query hooks
└── services/           # Supabase calls
```

### Authentication Flow

1. User signs in via Supabase Auth (`signInWithPassword` or OAuth)
2. `AuthProvider` syncs session to Zustand store via `onAuthStateChange`
3. `_authenticated` layout checks session in `beforeLoad` hook
4. 401 responses trigger automatic sign-out and redirect to `/sign-in`

## Deployment

### Vercel (configured)

The project includes a `vercel.json` for deployment. Push to your repository and connect it to Vercel, or deploy manually:

```bash
pnpm add -g vercel
vercel
```

Set the environment variables in the Vercel dashboard:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Other Platforms

Build output is a static SPA in `dist/`. Any static hosting that supports SPA rewrites will work:

```bash
pnpm run build
# Deploy the dist/ directory
```

Ensure all routes rewrite to `/index.html` for client-side routing.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, etc.)
4. Run quality checks before committing:
   ```bash
   pnpm run format
   pnpm run lint
   pnpm run build
   ```
5. Push and open a Pull Request

### Code Conventions

- **pnpm only** — do not use npm or yarn
- **Path alias** — use `@/` for imports from `src/`
- **ShadcnUI components** — do not manually edit files in `src/components/ui/`
- **Functional components** — no class components
- **Zod validation** — all forms use Zod schemas
- **Toast notifications** — use Sonner for user feedback
- **Semantic colors** — use Tailwind CSS variables, no hardcoded colors

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
