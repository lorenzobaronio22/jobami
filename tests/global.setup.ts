import { test } from '@playwright/test';
import { createClient } from '@supabase/supabase-js'
import { USER_1_ID } from './global.data';

test('create new database', async ({ }) => {
  console.log('creating new database...');
  // Initialize the database
  // const supabase = createClient(process.env.NUXT_PUBLIC_SUPABASE_URL!, process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY!)
  console.log('Supabase URL:', process.env.API_URL);
  const adminSupabase = createClient(process.env.API_URL!, process.env.SERVICE_ROLE_KEY!)

  await adminSupabase.auth.admin.createUser({
    id: USER_1_ID,
    email: `user1@test.com`,
    password: 'password123',
    email_confirm: true,
  })
  console.log('Test database created successfully.');

});