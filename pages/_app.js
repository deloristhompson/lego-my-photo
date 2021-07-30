import { ChakraProvider } from '@chakra-ui/react'; //A React Context API component that makes the Chakra theming system available everywhere in the app
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
