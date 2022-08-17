import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <Box
      maxWidth="74rem"
      height="calc(100vh - 10rem)"
      marginX="auto"
      marginY="5rem"
      padding="2.5rem"
      bgColor="gray.800"
      borderRadius="8px"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Outlet />
    </Box>
  )
}
