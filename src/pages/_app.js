import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()
function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App