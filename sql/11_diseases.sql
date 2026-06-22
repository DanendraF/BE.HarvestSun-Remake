create table public.diseases (
    id uuid default uuid_generate_v4() primary key,
    name varchar(255) unique not null,
    symptoms text,
    severity varchar(50) not null check (severity in ('low', 'medium', 'high', 'critical'))
);
