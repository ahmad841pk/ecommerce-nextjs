## Getting Started

run commands

npm i 
cp .env.example .env
npx prisma db push
npx prisma generate

# seed categories
cd src/scripts
node categorySeed.js
node productSeed.js(you have to addd images to "./public/uploads"name according to seeder)


# Todo
change database name according to your database

# build instruction
npm run build

# to run tests
npx jest or npm run test

# Demo Link
https://ecommerce-nextjs-chi-sand.vercel.app/
```
