import React from 'react'
import { Link } from 'solito/link'
import { Paragraph, SimpleImage, YStack, Text } from 'ui'
import type { YStackProps } from 'ui'

export interface ApplicationProps {
  logoUrl?: string
  title: string
  link: string
}

export const Application = ({ link, logoUrl, title, ...props }: ApplicationProps & YStackProps) => {
  return (
    <Link href={link} target="_blank">
      <YStack jc="center" {...props} ai="center" p="$4" br="$2" space>
        <YStack
          jc="center"
          ai="center"
          backgroundColor="$background"
          height={80}
          width={80}
          borderRadius={80}
        >
          {logoUrl === undefined ? (
            <Text fontWeight="bold">{title[0]?.toUpperCase()}</Text>
          ) : (
            <SimpleImage src={logoUrl} height={80} width={80} alt={title[0]?.toUpperCase()} />
          )}
        </YStack>
        <Paragraph textAlign="center" width={100} height={60} flexWrap="wrap">
          {title}
        </Paragraph>
      </YStack>
    </Link>
  )
}
