/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaClient } = require('@prisma/client');
const faker = require('faker'); // Require the faker generator
const prisma = new PrismaClient(); // Set our prisma constant to a new instance of the PrismaClient

// JSON object with dummy names and descriptions for 10 galleries
// Array(10) <-- Generates a 10-element array.
// .keys() <-- gets an array of indexes for the items in the array
// .map() <-- returns a new array filled with 10 gallery objects
const galleries = Array.from(Array(10).keys()).map(() => ({
  name: faker.lorem.words(5),
  description: faker.lorem.sentence(),
}));

async function main() {
  await prisma.gallery.createMany({
    data: galleries,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export {};
