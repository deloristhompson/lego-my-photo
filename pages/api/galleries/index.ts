/* eslint-disable import/no-anonymous-default-export */
// This is a API route file
import { PrismaClient } from '@prisma/client'; // Import the Prisma Client to access the database
const prisma = new PrismaClient(); // Set the prisma constant to our new instance of the Prisma Client.

// Define an async function with a catch block (to intercept and handle/pass along any errors)

export default (req, res) => {
  async function main() {
    // asynchronous function
    const galleries = await prisma.gallery.findMany({
      // await the gallery objects
      orderBy: [{ name: 'asc' }], // Order by name: ascending
    });

    return res.status(200).json(galleries); // return a status of 200 with a json blob of our galleries object
  }

  main() //<- What does that do?  Is there a way to not use it?
    .catch((e) => {
      throw e; // Throw the error to the client
    })
    .finally(async () => {
      // a finally block
      await prisma.$disconnect(); // Close our Prisma connection
    });
};
