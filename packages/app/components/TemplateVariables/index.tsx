import React, { useState } from 'react'
import { YStack, XStack, Input } from 'ui'
import { Minus, Plus } from '@tamagui/lucide-icons'

export interface TemplateVariableProps {
  item1: string
  item2?: string
}

export const TemplateVariables = (Props: TemplateVariableProps) => {
  const [variables, setVariables] = useState<{ id: number }[]>([])

  const addVariable = () => {
    const newVariable = { id: Date.now() }
    setVariables([...variables, newVariable])
  }

  const removeVariable = (idToRemove: number) => {
    const updatedVariables = variables.filter((variable) => variable.id !== idToRemove)
    setVariables(updatedVariables)
  }

  return (
    <YStack space p="$4">
      <XStack jc="flex-end" ai="center" space>
        <Plus onPress={addVariable} size="$4" />
      </XStack>
      {variables.map((variable) => (
        <XStack p="$3" space key={variable.id} width="100%" ai="center" jc="space-evenly">
          <Input placeholder={Props.item1} width="40%" />
          <Input
            disabled={Props.item2 === undefined ? true : false}
            placeholder={Props.item2}
            width="40%"
          />
          <YStack bw={1} cursor="pointer" p={2} ai="center" jc="flex-end">
            <Minus onPress={() => removeVariable(variable.id)} />
          </YStack>
        </XStack>
      ))}
    </YStack>
  )
}
