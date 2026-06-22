create table public.activities (
    id uuid default uuid_generate_v4() primary key,
    farm_id uuid references public.farms(id) on delete cascade not null,
    type varchar(50) not null check (type in ('irrigation', 'fertilizing', 'harvesting', 'pest_control', 'monitoring')),
    description text,
    date date not null,
    status varchar(50) default 'scheduled' check (status in ('completed', 'scheduled', 'in_progress')),
    cost decimal(12,2) default 0.00
);
