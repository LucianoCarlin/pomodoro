import {
  Flex,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { register } = useFormContext()
  return (
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
        step={1}
        min={1}
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
  )
}
