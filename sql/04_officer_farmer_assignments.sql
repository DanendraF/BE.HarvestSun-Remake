create table public.officer_farmer_assignments (
    id uuid default uuid_generate_v4() primary key,
    officer_id uuid references public.officer_profiles(id) on delete cascade not null,
    farmer_id uuid references public.farmer_profiles(id) on delete cascade not null,
    assigned_at timestamp with time zone default timezone('utc'::text, now()) not null,
    constraint unique_assignment unique (officer_id, farmer_id)
);
