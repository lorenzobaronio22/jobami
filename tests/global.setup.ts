import { test } from '@playwright/test';
import { createClient } from '@supabase/supabase-js'
import { USER_1_EMAIL, USER_1_ID, USER_1_PASSWORD } from './global.data';

test('create new database', async ({ }) => {
  const adminSupabase = createClient(process.env.API_URL!, process.env.SERVICE_ROLE_KEY!)
  await adminSupabase.auth.admin.createUser({
    id: USER_1_ID,
    email: USER_1_EMAIL,
    password: USER_1_PASSWORD,
    email_confirm: true,
  })

});