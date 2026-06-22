create table public.farmer_profiles (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.users(id) on delete cascade not null,
    phone varchar(20),
    location text,
    performance_score decimal(5,2) default 100.00,
    status varchar(20) default 'active' check (status in ('active', 'inactive')),
    constraint unique_farmer_user unique (user_id)
);
