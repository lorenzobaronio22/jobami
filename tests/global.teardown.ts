import { test } from '@playwright/test';
import { createClient } from '@supabase/supabase-js'
import { API_URL, SERVICE_ROLE_KEY, USER_1_ID } from './global.data';

test('delete database', async ({ }) => {
  const adminSupabase = createClient(API_URL, SERVICE_ROLE_KEY)
  await adminSupabase.auth.admin.deleteUser(USER_1_ID)

});