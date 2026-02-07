-- ============================================
-- CmdVault Initial Schema (idempotent)
-- ============================================

-- Enable UUID extension (in extensions schema for Supabase)
create extension if not exists "uuid-ossp" with schema extensions;

-- ============================================
-- 1. Profiles (extends auth.users)
-- ============================================
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text,
  avatar_url text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

alter table public.profiles enable row level security;

do $$ begin
  create policy "Users can view their own profile"
    on public.profiles for select
    using (auth.uid() = id);
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Users can update their own profile"
    on public.profiles for update
    using (auth.uid() = id);
exception when duplicate_object then null;
end $$;

-- Auto-create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================
-- 2. Commands (core feature)
-- ============================================
create table if not exists public.commands (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  command_text text not null,
  language text not null default 'bash',
  category text not null default 'cli',
  visibility text not null default 'private',
  user_id uuid references auth.users on delete cascade not null,
  is_favorite boolean default false not null,
  usage_count integer default 0 not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

alter table public.commands enable row level security;

do $$ begin
  create policy "Users can view own commands"
    on public.commands for select
    using (auth.uid() = user_id);
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Anyone can view public commands"
    on public.commands for select
    using (visibility = 'public');
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Users can create own commands"
    on public.commands for insert
    with check (auth.uid() = user_id);
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Users can update own commands"
    on public.commands for update
    using (auth.uid() = user_id);
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Users can delete own commands"
    on public.commands for delete
    using (auth.uid() = user_id);
exception when duplicate_object then null;
end $$;

-- ============================================
-- 3. Tags
-- ============================================
create table if not exists public.tags (
  id uuid default gen_random_uuid() primary key,
  name text not null unique,
  color text,
  created_at timestamptz default now() not null
);

alter table public.tags enable row level security;

do $$ begin
  create policy "Tags are viewable by everyone"
    on public.tags for select
    using (true);
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Authenticated users can create tags"
    on public.tags for insert
    with check (auth.role() = 'authenticated');
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Authenticated users can update tags"
    on public.tags for update
    using (auth.role() = 'authenticated');
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Authenticated users can delete tags"
    on public.tags for delete
    using (auth.role() = 'authenticated');
exception when duplicate_object then null;
end $$;

-- ============================================
-- 4. Command Tags (junction table)
-- ============================================
create table if not exists public.command_tags (
  command_id uuid references public.commands on delete cascade not null,
  tag_id uuid references public.tags on delete cascade not null,
  primary key (command_id, tag_id)
);

alter table public.command_tags enable row level security;

do $$ begin
  create policy "Users can view command_tags for their commands"
    on public.command_tags for select
    using (
      exists (
        select 1 from public.commands
        where commands.id = command_tags.command_id
          and (commands.user_id = auth.uid() or commands.visibility = 'public')
      )
    );
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Users can manage tags on their commands"
    on public.command_tags for insert
    with check (
      exists (
        select 1 from public.commands
        where commands.id = command_tags.command_id
          and commands.user_id = auth.uid()
      )
    );
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Users can remove tags from their commands"
    on public.command_tags for delete
    using (
      exists (
        select 1 from public.commands
        where commands.id = command_tags.command_id
          and commands.user_id = auth.uid()
      )
    );
exception when duplicate_object then null;
end $$;

-- ============================================
-- 5. Teams
-- ============================================
create table if not exists public.teams (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  created_by uuid references auth.users on delete cascade not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

alter table public.teams enable row level security;

-- ============================================
-- 6. Team Members
-- ============================================
create table if not exists public.team_members (
  team_id uuid references public.teams on delete cascade not null,
  user_id uuid references auth.users on delete cascade not null,
  role text not null default 'member',
  joined_at timestamptz default now() not null,
  primary key (team_id, user_id)
);

alter table public.team_members enable row level security;

do $$ begin
  create policy "Team members can view their teams"
    on public.teams for select
    using (
      exists (
        select 1 from public.team_members
        where team_members.team_id = teams.id
          and team_members.user_id = auth.uid()
      )
    );
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Users can create teams"
    on public.teams for insert
    with check (auth.uid() = created_by);
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Authenticated users can update teams"
    on public.teams for update
    using (auth.role() = 'authenticated');
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Authenticated users can delete teams"
    on public.teams for delete
    using (auth.role() = 'authenticated');
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Team members can view other members"
    on public.team_members for select
    using (
      exists (
        select 1 from public.team_members as tm
        where tm.team_id = team_members.team_id
          and tm.user_id = auth.uid()
      )
    );
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Authenticated users can manage team members"
    on public.team_members for insert
    with check (auth.role() = 'authenticated');
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Authenticated users can remove team members"
    on public.team_members for delete
    using (auth.role() = 'authenticated');
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "Team members can view team commands"
    on public.commands for select
    using (
      visibility = 'team' and exists (
        select 1 from public.team_members
        where team_members.user_id = auth.uid()
      )
    );
exception when duplicate_object then null;
end $$;

-- ============================================
-- 7. Auto-update updated_at triggers
-- ============================================
create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists update_profiles_updated_at on public.profiles;
create trigger update_profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at();

drop trigger if exists update_commands_updated_at on public.commands;
create trigger update_commands_updated_at
  before update on public.commands
  for each row execute function public.update_updated_at();

drop trigger if exists update_teams_updated_at on public.teams;
create trigger update_teams_updated_at
  before update on public.teams
  for each row execute function public.update_updated_at();

-- ============================================
-- 8. Indexes for performance
-- ============================================
create index if not exists commands_user_id_idx on public.commands (user_id);
create index if not exists commands_visibility_idx on public.commands (visibility);
create index if not exists commands_language_idx on public.commands (language);
create index if not exists commands_category_idx on public.commands (category);
create index if not exists command_tags_tag_id_idx on public.command_tags (tag_id);
create index if not exists team_members_user_id_idx on public.team_members (user_id);
