// HomeScreen.js
import React from 'react';
import { YStack, XStack, Text, SimpleImage, Button, ScrollView, H3 } from 'ui'; // Assuming ScrollView is part of your UI library
import { Header } from 'app/components/Header';
import { Zoom } from 'react-reveal';
import { LinkStack } from 'app/components/LinkStack';

const HomeScreen = () => {
  const icon = require('app/assets/icon.png');

  return (
    <YStack fullscreen>
      <Header />
      <ScrollView>
        <XStack justifyContent="space-between" padding={20}>
          <Zoom duration={800} delay={200}>
            <YStack marginTop="$20" ai="center" space="$6">
              <H3 fontSize="$10" fontWeight="700" fontStyle="italic">
                I'm
              </H3>
              <H3 fontSize="$12" fontStyle="italic">
                {' '}
                K.S.R PHANI BHUSHAN
              </H3>
              <Text fontSize={18} fontStyle="italic">
                Growing React Native Developer | Expanding Skills in JavaScript and TypeScript for both Mobile and Web
                Applications.
              </Text>

              <LinkStack href="/about">
                <Button>
                  <Text fontStyle="italic">About Me</Text>
                </Button>
              </LinkStack>
            </YStack>
          </Zoom>
          <Zoom duration={800} delay={400}>
            <SimpleImage src={icon} width={900} height={800} />
          </Zoom>
        </XStack>
      </ScrollView>
    </YStack>
  );
};

export default HomeScreen;
