import { Header } from 'app/components/Header'
import React from 'react'
import { H1, Paragraph, YStack } from 'ui'

const ErrorScreen = () => {
  return (
    <>
      <Header />
      <YStack jc="center" ai="center" pt={80} fullscreen>
        <H1>404</H1>
        <Paragraph>
          This page you are looking for may have been moved, deleted or possibly never existed.
        </Paragraph>
      </YStack>
    </>
  )
}

export default ErrorScreen
