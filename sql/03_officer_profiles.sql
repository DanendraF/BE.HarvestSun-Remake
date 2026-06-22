create table public.officer_profiles (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.users(id) on delete cascade not null,
    region varchar(100),
    performance_score decimal(5,2) default 100.00,
    status varchar(20) default 'active' check (status in ('active', 'inactive')),
    constraint unique_officer_user unique (user_id)
);
