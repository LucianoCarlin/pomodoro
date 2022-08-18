import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { StatusTable } from './Table/Status'

export function History() {
  return (
    <Box flex="1" padding="3.5rem" display="flex" flexDirection="column">
      <Text fontSize="1.5rem" color="gray.100">
        Meu histórico
      </Text>

      <TableContainer>
        <Table variant="simple" colorScheme="green">
          <Thead>
            <Tr>
              <Th>Tarefa</Th>
              <Th>Duração</Th>
              <Th>Início</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr color="gray.500">
              <Td>Tarefa</Td>
              <Td>20 minutos</Td>
              <Td>Há 2 meses</Td>
              <Td>
                <StatusTable statusColor="green">Concluído</StatusTable>
              </Td>
            </Tr>
            <Tr color="gray.500">
              <Td>Tarefa</Td>
              <Td>20 minutos</Td>
              <Td>Há 2 meses</Td>
              <Td>
                <StatusTable statusColor="yellow">Em andamento</StatusTable>
              </Td>
            </Tr>
            <Tr color="gray.500">
              <Td>Tarefa</Td>
              <Td>20 minutos</Td>
              <Td>Há 2 meses</Td>
              <Td>
                <StatusTable statusColor="green">Concluído</StatusTable>
              </Td>
            </Tr>
            <Tr color="gray.500">
              <Td>Tarefa</Td>
              <Td>20 minutos</Td>
              <Td>Há 2 meses</Td>
              <Td>
                <StatusTable statusColor="red">Interrompido</StatusTable>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
