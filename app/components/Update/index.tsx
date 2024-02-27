import React from 'react'
import { YStack, H2, XStack, Button, Paragraph } from 'ui'

export const Update = () => {
  return (
    <YStack space p="$3">
      <YStack jc="center" bg="$background" p="$3">
        <H2>Update</H2>
      </YStack>
      <Paragraph>
        Update It to the latest version. {'\n'}
        Note: This will spin up a run-once watchtower instance and update Yacht. In the process
        Yacht will be restarted and you will be logged out.
      </Paragraph>
      <XStack space>
        <Button br={0}>UPDATE</Button>
      </XStack>
    </YStack>
  )
}
