global.fetch = require('node-fetch');
global.Request = fetch.Request;

import { NextResponse } from "next/server";
import { GET } from './route'; // Adjust the import path as necessary
import { PrismaClient } from '@prisma/client';

// Mock Prisma Client
jest.mock('@prisma/client', () => ({
 PrismaClient: jest.fn().mockImplementation(() => ({
    product: {
      findMany: jest.fn(),
    },
 })),
}));

describe('GET', () => {
 it('should fetch products', async () => {
    // Mock data
    const mockData = [
        {
            "id": 2,
            "name": "oglasnik",
            "price": "20",
            "image": "oglasnik-logo.png",
            "categoryId": 1
        },
        {
            "id": 3,
            "name": "cricket bat",
            "price": "24",
            "image": "criecktBat.jpg",
            "categoryId": 1
        },
        {
            "id": 4,
            "name": "tennis ball",
            "price": "30",
            "image": "tennisBalljpg.jpg",
            "categoryId": 1
        },
        {
            "id": 5,
            "name": "football",
            "price": "50",
            "image": "footballjpg.jpg",
            "categoryId": 1
        },
        {
            "id": 6,
            "name": "laptop",
            "price": "40",
            "image": "laptopjpg.jpg",
            "categoryId": 5
        },
        {
            "id": 7,
            "name": "Mobile",
            "price": "74",
            "image": "mobile.jpg",
            "categoryId": 5
        },
        {
            "id": 8,
            "name": "headphone",
            "price": "10",
            "image": "headphonejpg.jpg",
            "categoryId": 5
        },
        {
            "id": 9,
            "name": "Red Tee",
            "price": "35",
            "image": "redTee.jpg",
            "categoryId": 4
        },
        {
            "id": 10,
            "name": "white tee",
            "price": "80",
            "image": "whiteTeejpg.jpg",
            "categoryId": 4
        }
    ]

    // Mock the Prisma client's findMany method to return the mock data
    const prisma = new PrismaClient();
    prisma.product.findMany.mockResolvedValue(mockData);

    // Mock the request object
    const req = {
      nextUrl: {
        searchParams: {
          get: jest.fn().mockReturnValue('query'), // Adjust the mock return value as needed
        },
      },
    };

    // Call the GET function
    const response = await GET(req);

    // Assert the response
    expect(response).toEqual(NextResponse.json({ data: mockData, status: 200 }));
 });
});

