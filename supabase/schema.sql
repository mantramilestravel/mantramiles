-- Run once in the Supabase dashboard: SQL Editor > New query > paste > Run.

create table if not exists public.packages (
  id text primary key,                 -- slug used in /package/:id
  name text not null,
  destinations text not null default '',
  duration text not null default '',
  description text not null default '',
  price text not null default 'Contact us for best rate',
  old_price text not null default '',
  rating numeric not null default 4.5,
  type text not null default 'Domestic' check (type in ('Domestic', 'International')),
  tag text,
  cover_image text,
  images text[] not null default '{}',
  pdf text,
  highlights text[] not null default '{}',
  inclusions text[] not null default '{}',
  exclusions text[] not null default '{}',
  terms text[] not null default '{}',
  variants jsonb not null default '[]',
  itinerary jsonb not null default '[]',
  show_in_hero boolean not null default false,
  hero_image text,
  hero_title text not null default '',
  hero_subtitle text not null default '',
  hero_highlight text not null default '',
  hero_cta text not null default 'Explore',
  sort_order int not null default 0,
  published boolean not null default true,
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists packages_set_updated_at on public.packages;
create trigger packages_set_updated_at
  before update on public.packages
  for each row execute function public.set_updated_at();

-- Access rules: the public can read published trips; only a logged-in user can write.
alter table public.packages enable row level security;

drop policy if exists "public read published" on public.packages;
create policy "public read published" on public.packages
  for select using (published = true);

drop policy if exists "admin read all" on public.packages;
create policy "admin read all" on public.packages
  for select to authenticated using (true);

drop policy if exists "admin write" on public.packages;
create policy "admin write" on public.packages
  for all to authenticated using (true) with check (true);

-- Storage bucket for trip images and PDFs (public read, admin write).
insert into storage.buckets (id, name, public)
values ('trip-media', 'trip-media', true)
on conflict (id) do nothing;

drop policy if exists "public read media" on storage.objects;
create policy "public read media" on storage.objects
  for select using (bucket_id = 'trip-media');

drop policy if exists "admin write media" on storage.objects;
create policy "admin write media" on storage.objects
  for all to authenticated
  using (bucket_id = 'trip-media') with check (bucket_id = 'trip-media');

-- NOTE: only create ONE user (the client) under Authentication > Users and turn off
-- "Allow new users to sign up" under Authentication > Providers > Email, because
-- any authenticated user can edit trips under these rules.
