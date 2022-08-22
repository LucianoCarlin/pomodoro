import { ReactElement } from 'react'
import { IconButton, IconButtonProps } from '@chakra-ui/react'

interface ButtonStartStopProps extends IconButtonProps {
  color: string
  title: string
  icon: ReactElement
}

export function ButtonStartStop({
  color,
  title,
  icon,
  ...rest
}: ButtonStartStopProps) {
  return (
    <IconButton
      {...rest}
      width="100%"
      colorScheme={color}
      aria-label={title}
      size="lg"
      icon={icon}
      title={title}
    />
  )
}
