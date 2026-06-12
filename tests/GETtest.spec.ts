import {test, expect} from '@playwright/test';

test('GET request test', async ({request}) => {

    const response = await request.get('https://fakerestapi.azurewebsites.net//api/v1/Activities');
    
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('title', 'string');
    expect(responseBody).toHaveProperty('id', '0');

    console.log(responseBody);



})