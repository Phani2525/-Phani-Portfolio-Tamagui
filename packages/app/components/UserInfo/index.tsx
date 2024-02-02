import React from 'react';
import { Button, H3, Paragraph, XStack, YStack, Text } from 'ui/src';
import { Mail, Github, Gitlab, Linkedin } from '@tamagui/lucide-icons';
import { Zoom, Bounce, Slide } from 'react-reveal';

export function UserInfo() {
  const developerEmail = 'kotharuphani@gmail.com';

  const handleContact = () => {
    window.location.href = `mailto:${developerEmail}`;
  };

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  const backGroundImage = require('app/assets/background1.png');

  return (
    <YStack
      marginLeft="$10"
      width={1800}
      space
      style={{ backgroundImage: `url(${backGroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}
    >
      <YStack space="$10" pl="$4" m="$4" elevation="$0.5">
        <Zoom>
          <XStack space="$6" jc="flex-start" ai="center" m="$4">
            <Bounce>
              <Text fontSize="$11" fontFamily="$buffaloWestern">
                This Website is Developed and Maintained By K.S.R PHANI BHUSHAN
              </Text>
            </Bounce>
          </XStack>
        </Zoom>
        <Slide right>
          <Paragraph fontSize="$10" mb="$4" fontStyle="italic" fontFamily="$ifcWildRodeo">
            If there are any issues, please reach out to my mail: {developerEmail}
          </Paragraph>
        </Slide>
        <Zoom>
          <XStack space="$3">
            <Bounce>
              <H3 fontStyle="italic" fontSize="$8">
                If You Have Any Queries Please CheckOut My Profile Here
              </H3>
            </Bounce>
            <Slide left>
              <Button onPress={() => openLink('https://gitlab.com/phani25')}>
                <Gitlab /> GitLab
              </Button>
            </Slide>
            <Slide right>
              <Button onPress={() => openLink('https://github.com/Phani2525')}>
                <Github /> GitHub
              </Button>
            </Slide>
            <Slide left>
              <Button onPress={() => openLink('https://www.linkedin.com/in/phani-bhushan-131b1327a/')}>
                <Linkedin /> LinkedIn
              </Button>
            </Slide>
          </XStack>
        </Zoom>
      </YStack>
    </YStack>
  );
}
