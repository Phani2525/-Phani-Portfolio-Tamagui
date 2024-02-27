import { Text, XStack } from 'ui'
import React from 'react'
import { Activity, BatteryMedium, Cpu, MemoryStick } from '@tamagui/lucide-icons'
import { LinkStack } from '../LinkStack'

interface TopIndicatorProps {
  memoryUsage?: number
  cpuUsage?: number
}
export function TopIndicator({ memoryUsage, cpuUsage }: TopIndicatorProps) {
  return (
    <XStack
      jc="space-between"
      paddingVertical="$1"
      paddingHorizontal="$2"
      backgroundColor="$backgroundTransparent"
    >
      <XStack space>
        {memoryUsage && (
          <LinkStack href="/containers">
            <MemoryStick size="$2" />
            <Text> {memoryUsage}% </Text>
          </LinkStack>
        )}
        {cpuUsage && (
          <XStack space="$2">
            <Cpu size="$2" />
            <Text> {cpuUsage}%</Text>
          </XStack>
        )}
      </XStack>
      <XStack jc="space-between" space>
        <Activity size="$2" />
        <BatteryMedium size="$2" />
      </XStack>
    </XStack>
  )
}
