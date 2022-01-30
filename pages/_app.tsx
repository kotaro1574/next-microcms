import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Box, ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Header />
    <Box maxW={'70%'} mx={'auto'} p={4}>
      <Component {...pageProps} />
    </Box>
  </ChakraProvider>
)

export default MyApp
