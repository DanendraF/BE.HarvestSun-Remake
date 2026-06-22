create table public.activity_types (
    id uuid default uuid_generate_v4() primary key,
    name varchar(100) unique not null,
    category varchar(100),
    icon varchar(50)
);
