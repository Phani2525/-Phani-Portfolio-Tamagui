import React from 'react'
import { YStack, Text, Card, SimpleImage, XStack, H2, ScrollView } from 'ui'
import { Header } from 'app/components/Header'
import { Fade } from 'react-reveal'

export const ServiceScreen = () => {
  const services = [
    {
      name: 'Web Development',
      description: 'Both Static and Dynamic Websites',
      image: require('app/assets/web.png'),
    },
    {
      name: 'DevOps',
      description:
        'Kubernetes, maintaining EC2 instances, Clusters, Pods, Docker Containers, Route53, S3 Buckets and Deploying Helm charts',
      image: require('app/assets/devops.png'),
    },
    {
      name: 'Custom Debian OS',
      description: 'Creating Custom Debian Operating Systems',
      image: require('app/assets/debian.png'),
    },
    {
      name: 'React Native Apps',
      description: 'Developing Mobile Apps using JavaScript and TypeScript',
      image: require('app/assets/native.png'),
    },
  ]

  const background = require('app/assets/background1.png')

  return (
    <YStack
      fullscreen
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}
    >
      <Header />
      <ScrollView>
        <H2 marginTop="$6" space fontSize={40} alignSelf="center">
          <Text fontStyle="italic">My Services</Text>
        </H2>
        <XStack marginTop="$8" space justifyContent="space-evenly">
          {services.map((service, index) => (
            <Fade key={index} duration={800} delay={index * 200}>
              <Card
                backgroundColor="$gray7Dark"
                space="$1"
                width="400px"
                height="500px"
                margin="$2"
                padding="$5"
                hoverStyle={{ transform: [{ scale: 1.1 }] }}
              >
                <SimpleImage
                  src={service.image}
                  style={{ width: '100%', height: '70%', borderRadius: '10px' }}
                />
                <YStack jc="center" ai="center" marginTop="$2">
                  <Text fontStyle="italic" fontSize={28} fontWeight="bold">
                    {service.name}
                  </Text>
                  <Text fontStyle="italic" fontSize={20} marginTop="$2">
                    {service.description}
                  </Text>
                </YStack>
              </Card>
            </Fade>
          ))}
        </XStack>
      </ScrollView>
    </YStack>
  )
}
