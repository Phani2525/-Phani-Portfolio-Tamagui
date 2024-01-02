import React from 'react';
import { Text, Card, Circle, YStack } from 'ui';
import type { CardProps } from 'ui';

type ContainerCardProps = CardProps & {
  name: string;
  cpuUsage: number;
  memoryUsage: number;
};

export const ContainerCard = ({ cpuUsage, name, memoryUsage, ...props }: ContainerCardProps) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Card
      margin="$2"
      bw="$0.5"
      borderColor="$backgroundStrong"
      paddingHorizontal="$2"
      elevation="$12"
      w="$13"
      h="$16"
      animation="tooltip"
      enterStyle={{ y: -200 }}
      borderRadius="$5"
      justifyContent="space-around"
      {...props}
    >
      <YStack jc="center" ai="center" padding="$2">
        <Circle size="$10" bg={getRandomColor()}>
          <Text fontSize={40} fontWeight="700" color="$textStrong">
            {name[0]?.toUpperCase()}
          </Text>
        </Circle>
        <YStack overflow="hidden" marginTop="$4">
          <Text style={{ whiteSpace: 'nowrap' }}>{name.length > 13 ? name.substring(0, 15) + '...' : name}</Text>
        </YStack>
      </YStack>
      {/* Uncomment and adjust the following code as needed
      <Text fontWeight="700" fontSize="$4">
        {name}
      </Text>
      <Text fontSize={12}>CPU Usage:</Text>
      <Progress value={cpuUsage * 100} style={{ backgroundColor: 'yellowgreen' }} size="$2">
        <Progress.Indicator style={{ backgroundColor: 'steelblue' }} animation="bouncy" />
      </Progress>
      <Text fontSize={12}>{cpuUsage * 100}%</Text>
      <Text fontSize={12}>Memory Usage:</Text>
      <Progress value={memoryUsage * 100} style={{ backgroundColor: 'yellowgreen' }} size="$2">
        <Progress.Indicator style={{ backgroundColor: 'steelblue' }} animation="bouncy" />
        <Text fontSize={12}>{memoryUsage * 100}%, 79.97 MB / 1.94 GB</Text>
      </Progress>
      */}
    </Card>
  );
};
