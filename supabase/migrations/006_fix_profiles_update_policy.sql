-- Fix: ensure the UPDATE policy on profiles works correctly.
-- Drop and recreate to resolve any stale or conflicting policy.

drop policy if exists "Users can update their own profile" on public.profiles;

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- RPC function to update own profile (bypasses RLS via security definer)
create or replace function update_own_profile(new_full_name text)
returns void as $$
begin
  update public.profiles
  set full_name = new_full_name, updated_at = now()
  where id = auth.uid();
end;
$$ language plpgsql security definer;
