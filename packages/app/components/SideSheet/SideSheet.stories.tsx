import { Text, YStack } from 'ui'
import { SideSheet } from './index'
import React from 'react'

export default {
  title: 'components/SideSheet',
  component: SideSheet,
  parameters: {
    status: {
      type: 'beta',
    },
  },
}

export const main = () => (
  <SideSheet>
    <YStack height={200} width={300}>
      <Text>Hello</Text>
      <Text>World</Text>
    </YStack>
  </SideSheet>
)
