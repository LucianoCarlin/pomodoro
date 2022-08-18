import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

const STATUS_COLORS = {
  yellow: 'yellow.500',
  red: 'red.500',
  green: 'green.500',
}

interface StatusTableProps {
  statusColor: 'yellow' | 'red' | 'green'
  children: ReactNode
}

export function StatusTable({ statusColor, children }: StatusTableProps) {
  return (
    <Flex
      alignItems="center"
      gap="0.5rem"
      _before={{
        content: `''`,
        width: '0.5rem',
        height: '0.5rem',
        borderRadius: '9999px',
        backgroundColor: STATUS_COLORS[statusColor],
      }}
    >
      {children}
    </Flex>
  )
}
