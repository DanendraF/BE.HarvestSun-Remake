create table public.farms (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.users(id) on delete cascade not null,
    name varchar(255) not null,
    location text,
    size decimal(10,2) not null, -- dalam hektar
    crop_type varchar(100),
    status varchar(50) default 'active' check (status in ('active', 'inactive', 'harvesting')),
    health_score integer default 100 check (health_score >= 0 and health_score <= 100),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
