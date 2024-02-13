import React from 'react'
import { YStack, Text, Card, XStack, H2, ScrollView } from 'ui'
import { LinkStack } from 'app/components/LinkStack'
import { Header } from 'app/components/Header'
import { SolitoImage } from 'solito/image'
import { createParam } from 'solito'

const { useParam } = createParam<{ service: string }>()

const ServiceDetailsScreen = () => {
  const service = useParam('service')[0]
  console.log(service)

  const background = require('app/assets/background1.png')

  return (
    <YStack
      fullscreen
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <Header />
      <ScrollView>
        <H2 marginTop="$6" space fontSize={40} alignSelf="center">
          <Text fontStyle="italic">Service Details</Text>
        </H2>
        <XStack marginTop="$8" space jc="space-evenly">
          <Card
            backgroundColor="$gray7Dark"
            space="$1"
            width="400px"
            height="500px"
            margin="$2"
            padding="$5"
          >
            <SolitoImage
              src={service.image}
              alt={service.name}
              style={{ width: '100%', height: '70%', borderRadius: 10 }}
            />
            <YStack jc="center" ai="center" marginTop="$2">
              <Text fontStyle="italic" fontSize={28} fontWeight="bold">
                {service.name}
              </Text>
              <Text fontStyle="italic" fontSize={20} marginTop="$2">
                {service.description}
              </Text>
              <Text fontStyle="italic" fontSize={20} marginTop="$4">
                For more information,{' '}
                <LinkStack href="/contact" style={{ textDecorationLine: 'underline' }}>
                  contact me
                </LinkStack>
                .
              </Text>
            </YStack>
          </Card>
        </XStack>
      </ScrollView>
    </YStack>
  )
}

export default ServiceDetailsScreen
