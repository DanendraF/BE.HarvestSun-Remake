create table public.crops (
    id uuid default uuid_generate_v4() primary key,
    farm_id uuid references public.farms(id) on delete cascade not null,
    name varchar(255) not null,
    variety varchar(100),
    planting_date date not null,
    expected_harvest date,
    growth_stage varchar(100) default 'Vegetatif',
    health_status varchar(50) default 'healthy' check (health_status in ('healthy', 'warning', 'critical')),
    progress integer default 0 check (progress >= 0 and progress <= 100)
);
