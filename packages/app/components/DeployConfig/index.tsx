import React, { useState } from 'react'
import { YStack, H3, Button, Input, XStack, Text } from 'ui'
import { Plus, Minus } from '@tamagui/lucide-icons'
import { TemplateVariables } from 'app/components/TemplateVariables'

interface DeployConfigProps {
  children?: React.ReactNode
  onPress?: (e: React.MouseEvent) => void
}

export const DeployConfig: React.FC<DeployConfigProps> = () => {
  const [commandInputs, setCommandInputs] = useState<string[]>([])
  const [deviceInputs, setDeviceInputs] = useState<string[]>([])

  return (
    <YStack>
      <H3>Advanced</H3>
      <YStack>
        <YStack space>
          <XStack space alignItems="center" jc="space-around">
            <YStack space>
              <Button>Command</Button>
              <Text>Container Commands</Text>
            </YStack>
            <TemplateVariables item1="command" item2="value" />
          </XStack>
          {commandInputs.map((input, idx) => (
            <XStack alignItems="center" key={idx}>
              <Input w="70%" placeholder="Enter command" />
              <Minus
                size={40}
                onClick={() => {
                  const newInputs = [...commandInputs]
                  newInputs.splice(idx, 1)
                  setCommandInputs(newInputs)
                }}
              />
            </XStack>
          ))}

          {/* <XStack alignItems="center">
            <Button style={{ width: '20%' }}>Devices</Button>
            <TemplateVariables item1="key" item2="value" />
          </XStack> */}
          {/* {deviceInputs.map((input, idx) => (
            // <XStack alignItems="center" key={idx}>
            //   <Input w="70%" placeholder="Enter device" />
            // </XStack>
          ))} */}
        </YStack>
      </YStack>
    </YStack>
  )
}

export default DeployConfig
