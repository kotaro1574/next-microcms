import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Header />
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
