import { Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CountDownNumberProps {
  children: ReactNode
}
export function CountDownHome({ children }: CountDownNumberProps) {
  return (
    <Text bgColor="gray.700" paddingX="1rem" paddingY="2rem" borderRadius="8px">
      {children}
    </Text>
  )
}
