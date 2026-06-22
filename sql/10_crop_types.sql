create table public.crop_types (
    id uuid default uuid_generate_v4() primary key,
    name varchar(100) unique not null,
    variety text,
    season varchar(100)
);
