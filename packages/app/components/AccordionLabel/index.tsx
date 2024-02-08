import { Text, XStack } from 'ui'
import React from 'react'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'


// props
interface AccordionLabelProps {
  status?: string
  image?: string
  service?: string
  key: string
}

export function AccordionLabel({ status, image, service, key }: AccordionLabelProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <XStack
      justifyContent="space-between"
      hoverStyle={{ backgroundColor: '$backgroundPress' }}
      padding="$4"
      cursor="pointer"
      key={key}
      width="100%"
      onPress={() => setOpen(!open)}
      backgroundColor="$backgroundFocus"
      borderWidth={1}
      borderColor="$backgroundStrong"
      borderTopLeftRadius="$4"
      borderTopRightRadius="$4"
    >
      <Text width="25%">{service}</Text>
      <Text width="25%">{image}</Text>
      <Text width="25%">{status}</Text>
      {open ? <ChevronUp /> : <ChevronDown />}
    </XStack>
  )
}
