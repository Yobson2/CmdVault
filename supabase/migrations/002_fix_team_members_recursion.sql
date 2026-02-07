-- Fix infinite recursion in team_members RLS policy.
-- The old policy queried team_members FROM team_members, causing a loop.
-- Solution: SECURITY DEFINER functions that bypass RLS for the inner check.

-- 1. Helper: check if user is a member of a specific team
create or replace function public.has_team_membership(p_team_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from team_members
    where team_id = p_team_id and user_id = auth.uid()
  );
$$;

-- 2. Helper: check if user is a member of any team
create or replace function public.is_any_team_member()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from team_members
    where user_id = auth.uid()
  );
$$;

-- 3. Drop the recursive policies
drop policy if exists "Team members can view other members" on public.team_members;
drop policy if exists "Team members can view team commands" on public.commands;

-- 4. Recreate without recursion
create policy "Team members can view other members"
  on public.team_members for select
  using (public.has_team_membership(team_id));

create policy "Team members can view team commands"
  on public.commands for select
  using (visibility = 'team' and public.is_any_team_member());
