create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company_size text not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.leads enable row level security;

create policy "Allow public lead inserts"
on public.leads
for insert
to anon, authenticated
with check (true);
