/**
 * @jest-environment node
 */
import { GET } from './route';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

const schema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    price: { type: 'string' },
    image: { type: 'string' },
    categoryId: { type: 'number' },
    category: {
      type: 'object',
      properties: {
        name: { type: 'string' }
      },
      required: ['name']
    }
  },
  required: ['id', 'name', 'price', 'image', 'categoryId', 'category']
};

describe('GET Products API', () => {

  it('should return all products data', async () => {
    const response = await GET();
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body).toHaveProperty('data');

    // Validate each item in the data array against the schema
    body.data.forEach(item => {
      expect(item).toMatchSchema(schema);
    });
  }, 10000);


  it('checking with filters', async () => {
    // Mock the request object with search parameters
    const mockReq = {
      nextUrl: new URL('http://example.com?query=test&categories=1,2&priceRanges=0,25&sort=price&currentPage=1')
    };

    const response = await GET(mockReq);
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body).toHaveProperty('data');

    // Validate each item in the data array against the schema
    body.data.forEach(item => {
      expect(item).toMatchSchema(schema);
    });
  }, 10000);

})