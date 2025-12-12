-- Projects table
create table if not exists public.projects (
  id uuid primary key default uuid_generate_v4(),
  owner uuid references auth.users on delete set null,
  title text not null,
  short_description text,
  long_description text,
  image text,
  demo_video text,
  live_url text,
  github_url text,
  tech text[],
  created_at timestamptz default now()
);

-- Testimonials
create table if not exists public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  name text,
  role text,
  message text,
  avatar text,
  created_at timestamptz default now()
);

-- Blog posts
create table if not exists public.posts (
  id uuid primary key default uuid_generate_v4(),
  slug text unique,
  title text not null,
  summary text,
  content text,
  tags text[],
  published boolean default false,
  created_at timestamptz default now()
);

-- Views analytics
create table if not exists public.views (
  id bigserial primary key,
  path text,
  count bigint default 0,
  updated_at timestamptz default now()
);
