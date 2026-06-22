create table public.users (
    id uuid default uuid_generate_v4() primary key,
    email varchar(255) unique not null,
    password varchar(255) not null,
    full_name varchar(255) not null,
    role varchar(50) not null check (role in ('farmer', 'officer', 'dinas', 'admin')),
    avatar_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
