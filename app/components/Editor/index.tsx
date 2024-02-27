import React, { useState, useEffect } from 'react'
import type { ScrollViewProps } from 'ui'
import { ScrollView, Text, TextArea, XStack, YStack } from 'ui'

type EditorProps = ScrollViewProps & {
  value?: string
  onChangeText?: (value: string) => void
}

export function Editor({ value, ...props }: EditorProps) {
  const [content, setContent] = useState(value || '')
  const [lineCount, setLineCount] = useState(0)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    const newLineCount = (content.match(/\n/g) || []).length + 1
    setLineCount(newLineCount)
  }, [content])

  function handleFocus() {
    setFocus(true)
  }

  function handleChangeText(text: string) {
    if (text.endsWith('\n')) {
      const lines = text.split('\n')
      const lastLine = lines[lines.length - 2]
      if (lastLine) {
        const leadingSpacesCount = (lastLine?.match(/^\s*/) || [])[0]?.length
        if (leadingSpacesCount && leadingSpacesCount > 0) {
          text += ' '.repeat(leadingSpacesCount)
        }
      }
    }
    handleSetContent(text)
  }

  function handleChange(e) {
    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      return handleSetContent(e.nativeEvent.text)
    }
    handleChangeText(e.nativeEvent.text)
  }

  function handleSetContent(text: string) {
    setContent(text)
    props.onChangeText?.(text)
  }

  useEffect(() => {
    if (value === content) return
    setContent(value || '')
  }, [value])

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      height={700}
      backgroundColor="$backgroundPress"
      {...props}
      onPress={handleFocus}
    >
      <XStack padding="$2">
        <YStack
          padding="$2"
          onPress={handleFocus}
          height="100%"
          minHeight={props.minHeight}
          minWidth="$3"
          ai="center"
        >
          {Array.from({ length: lineCount }, (_, i) => i + 1).map((lineNumber) => (
            <Text key={lineNumber}>{lineNumber}</Text>
          ))}
        </YStack>
        <TextArea
          value={content}
          onChange={handleChange}
          height="100%"
          width="100%"
          autoFocus={focus}
          minHeight={props.minHeight}
          unstyled
          fontSize="$7"
          padding="$2"
          overflow="hidden"
        />
      </XStack>
    </ScrollView>
  )
}
