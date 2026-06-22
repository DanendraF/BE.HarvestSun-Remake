import prisma from './config/prisma';
import { supabase } from './config/supabase';

const runTests = async () => {
  console.log('--- RUNNING CONNECTION TESTS ---');

  // Test 1: Prisma Database connection
  try {
    console.log('Testing Database connection (via Prisma)...');
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Database Connection: SUCCESS\n');
  } catch (error: any) {
    console.error('❌ Database Connection: FAILED');
    console.error(`Reason: ${error.message || error}\n`);
  }

  // Test 2: Supabase Connection
  try {
    console.log('Testing Supabase API Connection (via supabase-js)...');
    const { error } = await supabase.auth.getSession();
    if (error) throw error;
    console.log('✅ Supabase Connection: SUCCESS\n');
  } catch (error: any) {
    console.error('❌ Supabase Connection: FAILED');
    console.error(`Reason: ${error.message || error}\n`);
  }

  // Cleanup
  await prisma.$disconnect();
};

runTests();
