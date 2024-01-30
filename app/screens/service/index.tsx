import React from 'react';
import { YStack, Text, Card, SimpleImage, XStack, H2 } from 'ui';
import { Header } from 'app/components/Header';

export const ServiceScreen = () => {
  const services = [
    {
      name: 'Web Development',
      description: 'Both static and dynamic websites',
      image: require('app/assets/icon.png'),
    },
    {
      name: 'DevOps',
      description:
        'Kubernetes, maintaining EC2 instances, clusters, pods, Docker containers, Route53, S3, deploying Helm charts',
      image: require('app/assets/icon.png'),
    },
    {
      name: 'Custom Debian OS',
      description: 'Creating custom Debian operating systems',
      image: require('app/assets/icon.png'),
    },
    {
      name: 'React Native Apps',
      description: 'Developing mobile apps using JavaScript and TypeScript',
      image: require('app/assets/icon.png'),
    },
  ];

  return (
    <YStack>
      <Header />
      <H2 marginTop="$6" space fontSize={40} alignSelf="center">
        <Text fontStyle="italic">My Services</Text>
      </H2>
      <XStack marginTop="$8" space justifyContent="space-evenly">
        {services.map((service, index) => (
          <Card space="$1" key={index} width="400px" height="500px" margin="$2" padding="$5">
            <SimpleImage src={service.image} style={{ width: '100%', height: '70%', borderRadius: '10px' }} />
            <YStack jc="center" ai="center" marginTop="$2">
              <Text fontStyle="italic" fontSize={28} fontWeight="bold">
                {service.name}
              </Text>
              <Text fontStyle="italic" fontSize={20} marginTop="$2">
                {service.description}
              </Text>
            </YStack>
          </Card>
        ))}
      </XStack>
    </YStack>
  );
};
