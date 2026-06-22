import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl) {
  console.warn('Warning: SUPABASE_URL is not set in environment variables.');
}

// Client for general/public operations (inherits client-side permissions)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client for administrative operations (bypasses Row Level Security)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
