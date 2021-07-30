// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// Is this instead of useState?
import useSWR from 'swr';
import { Flex, Heading, Box, VStack } from '@chakra-ui/layout';

export default function DashboardPage() {
  const {
    // Is this a Next.js way to set variables?
    data: galleries, //The gallery data
    isValidating: dashboardIsLoading, //Boolean that is set based on if the data is fetching or revalidating
    error: dashboardFetchError, //Fetch the error if one exists
  } = useSWR(`/api/dashboard`); // Use the useSWR hook to fetch data from /api/dashboard (yarn add swr)
  // useSWR has a data object that we are assigning to the galleries variable. Created by Vercel
  // TODO: Review react-query

  if (dashboardIsLoading) {
    return <h1>Loading dashboard...</h1>;
  }

  if (dashboardFetchError) {
    return <h1>Error loading the dashboard.</h1>;
  }
  return (
    // <> <- This is shorthand for a React Fragment.  React functions always need to return a single container around everything
    // Box: Abstraction of a <div>
    // m: shorthand props margin
    // p: shorthand props padding
    // maxWidth: Max Width based on the breakpoint (screen size)
    <Box
      m="0 auto"
      p={5}
      maxWidth={{
        sm: '100%',
        md: '100%',
        lg: '40em',
        xl: '50em',
        '2xl': '74em',
      }}
    >
      {/* Heading: Abstraction of  <h1>-<h6>
        mb: margin bottom
      */}
      <Heading size="xl" mb={3}>
        Dashboard Page
      </Heading>
      {/* VStack: Component, Vertical version of Stack Component, Creates a vertical list */}
      <VStack spacing={5}>
        {/* galleries? is available from Typescript.  If the galleries variable does not exist we return undefined else return the galleries array */}
        {/* key={g.id}: Ensures that each list item has a unique key prop */}
        {/* Flex: Component
            Has defaults for applying CSS flexbox
            flex-direction='row' <- Expands the full width of the container
        */}
        {galleries?.map((g) => (
          <Flex
            width="100%"
            direction="row"
            key={g.id}
            radius={10}
            boxShadow="base"
            p={3}
          >
            <Heading size="md">{g.name}</Heading>
          </Flex>
        ))}
      </VStack>
    </Box>
    // </>
  );
}
