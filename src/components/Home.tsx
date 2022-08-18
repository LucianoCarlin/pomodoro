import {
  Box,
  Flex,
  FormLabel,
  IconButton,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const handleCreateNewCyclo = (data: newCycleFormData) => {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        as="form"
        onSubmit={handleSubmit(handleCreateNewCyclo)}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="3.5rem"
      >
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
          gap="0.5rem"
          color="gray.100"
          fontSize="1.125rem"
          fontWeight="bold"
        >
          <FormLabel htmlFor="task" width="15rem" mt="0.4rem">
            Vou trabalhar em
          </FormLabel>
          <Input
            {...register('task')}
            variant="flushed"
            placeholder="Dê um nome para o seu projeto"
            id="task"
            focusBorderColor="green.800"
            list="task-suggestion"
          />

          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <FormLabel htmlFor="minutesAmount" mt="0.4rem">
            durante
          </FormLabel>
          <NumberInput
            {...register('minutesAmount', { valueAsNumber: true })}
            variant="flushed"
            step={5}
            min={5}
            max={60}
            width="10rem"
            focusBorderColor="green.800"
          >
            <NumberInputField borderColor="gray.100" boxShadow="none" />
            <NumberInputStepper>
              <NumberIncrementStepper
                _hover={{
                  color: 'green.800',
                }}
              />
              <NumberDecrementStepper
                _hover={{
                  color: 'green.800',
                }}
              />
            </NumberInputStepper>
          </NumberInput>
          <FormLabel mt="0.4rem">minutos</FormLabel>
        </Flex>
        <Flex fontSize="10rem" lineHeight="8rem" color="gray.100" gap="1rem">
          <Text
            bgColor="gray.700"
            paddingX="1rem"
            paddingY="2rem"
            borderRadius="8px"
          >
            0
          </Text>
          <Text
            bgColor="gray.700"
            paddingX="1rem"
            paddingY="2rem"
            borderRadius="8px"
          >
            0
          </Text>
          <Flex
            width="4rem"
            color="green.500"
            paddingY="2rem"
            borderRadius="8px"
            overflow="hidden"
            justifyContent="center"
          >
            :
          </Flex>
          <Text
            bgColor="gray.700"
            paddingX="1rem"
            paddingY="2rem"
            borderRadius="8px"
          >
            0
          </Text>
          <Text
            bgColor="gray.700"
            paddingX="1rem"
            paddingY="2rem"
            borderRadius="8px"
          >
            0
          </Text>
        </Flex>

        <IconButton
          disabled={isSubmitDisable}
          width="100%"
          type="submit"
          colorScheme="green"
          aria-label="Começar a contar"
          size="lg"
          icon={<FaPlay />}
          title="Começar"
        />
      </Box>
    </Box>
  )
}
