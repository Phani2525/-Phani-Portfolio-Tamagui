import React from 'react'
import { YStack, SimplePopover } from 'ui'
import { CircleEllipsis } from '@tamagui/lucide-icons'

interface ResourcesOptionsProps {
  children?: React.ReactNode
  onPress?: (e) => void
}

export const ResourcesOptions = ({ children, onPress }: ResourcesOptionsProps) => {
  function triggerPopover() {
    return (
      <YStack ai="flex-end">
        <CircleEllipsis size="$2" />
      </YStack>
    )
  }

  return (
    <YStack space ai="center" onPress={onPress}>
      <SimplePopover trigger={triggerPopover()}>
        <YStack space>{children}</YStack>
      </SimplePopover>
    </YStack>
  )
}
