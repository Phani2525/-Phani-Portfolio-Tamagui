import React, { useState, useEffect } from 'react'
import type { FontWeightTokens } from 'ui'
import { YStack, Text, XStack } from 'ui'

export interface LoaderProps {
  isLoading: boolean
  text?: string
  fontNumber?: number
  fontWeight?: FontWeightTokens
}

export const Loader = ({ isLoading, text, fontNumber, fontWeight }: LoaderProps) => {
  const [dots, setDots] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots((prevDots) => (prevDots + 1) % 4)
      }, 500)

      return () => clearInterval(interval)
    } else {
      setDots(0)
    }
  }, [isLoading])

  const dotsText = isLoading ? '.'.repeat(dots) + ' '.repeat(3 - dots) : ''

  return (
    <YStack width="100%" height="100%" jc="center" ai="center" space="$4">
      <XStack>
        <Text fontSize={fontNumber} fontWeight={fontWeight}>
          {text}
        </Text>
        <Text minWidth={20} alignSelf="flex-end" fontSize={fontNumber} fontWeight={fontWeight}>
          {dotsText}
        </Text>
      </XStack>
    </YStack>
  )
}
