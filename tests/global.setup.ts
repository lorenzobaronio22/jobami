import { test } from '@playwright/test';
import { createClient } from '@supabase/supabase-js'
import { API_URL, SERVICE_ROLE_KEY, USER_1_EMAIL, USER_1_ID, USER_1_PASSWORD } from './global.data';

test('create new database', async ({ }) => {
  console.log('Creating new database API_URL: ', API_URL);
  const adminSupabase = createClient(API_URL, SERVICE_ROLE_KEY)
  await adminSupabase.auth.admin.createUser({
    id: USER_1_ID,
    email: USER_1_EMAIL,
    password: USER_1_PASSWORD,
    email_confirm: true,
  })

});