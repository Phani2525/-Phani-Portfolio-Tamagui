import React from 'react'
import { Button, Text } from 'ui'
import { Link } from '@tamagui/lucide-icons'

interface PortButtonProps {
  port?: string
}

export function PortButton({ port }: PortButtonProps) {
  const handleButtonClick = (e) => {
    e.stopPropagation()
    if (!port) return
    window.open(`http://localhost:${port}`, '_blank')
  }

  return (
    <Button
      bg="seagreen"
      hoverStyle={{ bg: '$purple10Dark' }}
      pressStyle={{ bg: 'red' }}
      onPress={handleButtonClick}
      size="$2"
    >
      <Link size={16} />
      <Text ai="center" jc="center">
        {port}
      </Text>
    </Button>
  )
}
