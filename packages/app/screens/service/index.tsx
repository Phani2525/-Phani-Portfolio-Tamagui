import React from 'react'
import { YStack, Text, Card, XStack, H2, ScrollView } from 'ui'
import { Header } from 'app/components/Header'
import { Fade } from 'react-reveal'
import { SolitoImage } from 'solito/image'
import { useRouter } from 'solito/router'

export const ServiceScreen = () => {
  const router = useRouter()
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
    <Card fullscreen>
      <Card.Background>
        <SolitoImage
          src={background}
          alt="background"
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
        />
      </Card.Background>
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
            <Text fontStyle="italic">My Services</Text>
          </H2>
          <XStack marginTop="$8" space jc="space-evenly">
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
                  // onPress={() => router.push(`/services/${service.name}`)}
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
                  </YStack>
                </Card>
              </Fade>
            ))}
          </XStack>
        </ScrollView>
      </YStack>
    </Card>
  )
}
