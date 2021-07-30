// This file was created according to the book.
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Define an async function with a catch block (to intercept and handle/pass along any errors)
// a finally block will always close our Prisma connection
// eslint-disable-next-line import/no-anonymous-default-export
export default (_req, res) => {
  console.log('Hello World');

  async function main() {
    const galleries = await prisma.gallery.findMany({
      orderBy: [{ name: 'asc' }],
    });

    return res.status(200).json(galleries);
  }

  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};
