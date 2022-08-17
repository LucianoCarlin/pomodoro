import { Flex, Icon, Image } from '@chakra-ui/react'
import { GiTimeBomb } from 'react-icons/gi'
import { ImFilesEmpty } from 'react-icons/im'
import igniteLogo from '../assets/ignite-logo.svg'
import { LinkHeader } from './LinkHeader'

export function Header() {
  return (
    <Flex as="header" alignItems="center" justifyContent="space-between">
      <Image height="2.5rem" objectFit="cover" src={igniteLogo} alt="" />
      <Flex as="nav" gap="0.5rem">
        <LinkHeader to="/" altLink="Timer">
          <Icon color="gray.500" fontSize="1.5rem" as={GiTimeBomb} />
        </LinkHeader>
        <LinkHeader to="/history" altLink="Histórico">
          <Icon color="gray.500" fontSize="1.5rem" as={ImFilesEmpty} />
        </LinkHeader>
      </Flex>
    </Flex>
  )
}
