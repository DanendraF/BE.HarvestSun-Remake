create table public.disease_alerts (
    id uuid default uuid_generate_v4() primary key,
    farm_id uuid references public.farms(id) on delete cascade not null,
    disease_name varchar(255) not null,
    severity varchar(50) not null check (severity in ('low', 'medium', 'high', 'critical')),
    detected_at timestamp with time zone default timezone('utc'::text, now()) not null,
    image_url text,
    status varchar(50) default 'active' check (status in ('active', 'resolved')),
    recommendation text
);
