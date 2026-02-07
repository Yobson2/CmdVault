-- Allow team creators to SELECT their own teams immediately after INSERT.
-- Without this, .insert().select() fails because the only existing SELECT
-- policy requires a team_members row, which hasn't been created yet.

create policy "Team creators can view their own teams"
  on public.teams for select
  using (auth.uid() = created_by);
