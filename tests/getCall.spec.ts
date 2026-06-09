import { test, expect } from '@playwright/test';

test('Test Get API', async ({ request }) => {
  const resp = await request.get('https://restful-booker.herokuapp.com/booking');
  expect(resp.ok()).toBeTruthy();
  const respJson = await resp.json();
  console.log(respJson);
});

