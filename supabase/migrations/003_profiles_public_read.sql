-- Allow authenticated users to view all profiles.
-- Required for: Explore page (author info on public commands), Teams (member names).
-- The existing policy only lets users see their OWN profile.

create policy "Authenticated users can view all profiles"
  on public.profiles for select
  using (auth.role() = 'authenticated');
