import React from 'react'
import { useLink } from 'solito/link'
import { XStack } from 'ui'
import type { XStackProps } from 'ui'

interface LinkProps {
  href: string
  children: React.ReactNode
  notLink?: boolean
}

type LinkScreenProps = LinkProps & XStackProps
export function LinkStack({ href, children, notLink, ...props }: LinkScreenProps) {
  const link = useLink({ href })
  return (
    <XStack
      cur="pointer"
      space="$2"
      paddingHorizontal="$4"
      jc="flex-start"
      {...props}
      ai="center"
      {...(notLink ? {} : link)}
    >
      {children}
    </XStack>
  )
}
