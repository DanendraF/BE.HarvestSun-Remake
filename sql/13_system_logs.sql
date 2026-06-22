create table public.system_logs (
    id uuid default uuid_generate_v4() primary key,
    level varchar(20) not null check (level in ('info', 'warning', 'error')),
    message text not null,
    source varchar(255),
    timestamp timestamp with time zone default timezone('utc'::text, now()) not null
);
