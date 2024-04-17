const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const categories = [
    { name: 'new-arrivals' },
    { name: 'tees' },
    { name: 'crewnecks' },
    { name: 'electronics' },
    { name: 'sports' }
];

async function categorySeed() {

    await Promise.all(categories.map(async (category) => {
        await prisma.category.create({
            data: {
                name: category.name
            }
        });
    }));

    console.log('Seed data inserted successfully');
}

async function main() {

    await categorySeed()
}

main().catch((err) => {

    console.error("An error occurred during seeding categories", err)

})