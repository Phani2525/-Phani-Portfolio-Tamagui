import React from 'react';
import { YStack, XStack, Button, Text, SimpleImage } from 'ui';
import { Header } from 'app/components/Header';

export const AboutScreen = () => {
  const icon = require('app/assets/icon.png');
  return (
    <YStack fullscreen>
      <Header />
      <Text>hello</Text>
      <SimpleImage src={icon} width={30} height={40} />
    </YStack>
  );
};

export default AboutScreen;
