// import styles from '../styles/Home.module.css'
import { Flex, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Heading as="h1" size="lg">
        Lego my Photo
      </Heading>
      <Heading as="h2" size="md">
        Create and share photo galleries. Fast.
      </Heading>
    </Flex>
  );
}
