import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import { NavLink, NavLinkProps } from 'react-router-dom'

interface LinkHeaderProps extends NavLinkProps {
  altLink: string
  children: ReactNode
}

export function LinkHeader({ children, altLink, ...rest }: LinkHeaderProps) {
  return (
    <NavLink {...rest} title={altLink}>
      <Box
        width="3rem"
        height="3rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderTop="3px solid transparent"
        borderBottom="3px solid transparent"
        _hover={{
          borderBottom: '3px solid #22543D',
        }}
      >
        {children}
      </Box>
    </NavLink>
  )
}
