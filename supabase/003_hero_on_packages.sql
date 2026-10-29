-- Run once in the Supabase dashboard: SQL Editor > New query > paste > Run.
-- Moves the home page hero banner onto each trip: a trip with show_in_hero = true
-- appears as a slide, in the same order as Manage Trips.

alter table public.packages
  add column if not exists show_in_hero boolean not null default false,
  add column if not exists hero_image text,
  add column if not exists hero_title text not null default '',      -- falls back to the trip name
  add column if not exists hero_subtitle text not null default '',
  add column if not exists hero_highlight text not null default '',  -- small ribbon above the title
  add column if not exists hero_cta text not null default 'Explore'; -- button label

-- The separate hero_slides table from 002_hero_slides.sql is no longer used.
-- Optional clean-up (only if you ran 002):
-- drop table if exists public.hero_slides;
