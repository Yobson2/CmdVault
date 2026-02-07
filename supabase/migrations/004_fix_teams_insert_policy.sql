-- Fix teams INSERT policy.
-- Drop and recreate to ensure it's properly applied.

drop policy if exists "Users can create teams" on public.teams;

create policy "Users can create teams"
  on public.teams for insert
  with check (auth.uid() = created_by);
