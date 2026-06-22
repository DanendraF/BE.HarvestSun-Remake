-- Migration: Add password column to users table
ALTER TABLE public.users 
ADD COLUMN password varchar(255) not null;
