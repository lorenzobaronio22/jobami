import { test } from '@playwright/test';
import { createClient } from '@supabase/supabase-js'
import { USER_1_ID } from './global.data';

test('delete database', async ({ }) => {
  console.log('deleting test database...');
  // Delete the database
  const adminSupabase = createClient(process.env.API_URL!, process.env.SERVICE_ROLE_KEY!)

  await adminSupabase.auth.admin.deleteUser(USER_1_ID)
  console.log('Test database deleted successfully.');

});