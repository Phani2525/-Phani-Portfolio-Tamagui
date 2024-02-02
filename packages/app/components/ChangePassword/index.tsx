import { Eye, EyeOff } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { YStack, Text, Input, Button, XStack } from 'ui'
import type { YStackProps } from 'ui'

export const ChangePassword = (props: YStackProps) => {
  const [changePassword, setChangePassword] = useState('')
  const [showChangePassword, setShowChangePassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowChangePassword(!showChangePassword)
  }

  return (
    <YStack {...props} p={2}>
      <YStack
        space
        p="$4"
        backgroundColor="$blue6Dark"
        als="center"
        ai="center"
        jc="center"
        animation="lazy"
        enterStyle={{ y: 200 }}
      >
        <Text color="$gray10Dark" ai="center" als="center" fow="200">
          <XStack>
            <Input
              value={changePassword}
              onChangeText={setChangePassword}
              placeholder="You can update both your Mail and Password here"
              secureTextEntry={showChangePassword}
            />

            <Button onPress={togglePasswordVisibility}>
              {showChangePassword ? <EyeOff /> : <Eye />}{' '}
            </Button>
          </XStack>
        </Text>
      </YStack>
    </YStack>
  )
}
