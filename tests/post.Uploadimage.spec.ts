import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import path from 'path';

test('Test Upload Image API', async ({ request }) => {
    const imagePath = path.join(__dirname, '..', 'test-data', 'doggo.jpg');
    const imageBuffer = readFileSync(imagePath);

    const response = await request.post('/api/upload-image', {
        multipart: {
            image: {
                name: 'doggo.jpg',
                mimeType: 'image/jpeg',
                buffer: imageBuffer
            }
        });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responsebody = await response.json();
    expect(responsebody).toHaveProperty('imageUrl');
    expect(typeof responsebody.imageUrl).toBe('string');




});