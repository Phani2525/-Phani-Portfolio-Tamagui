import React from 'react';
import { Button, H3, Paragraph, XStack, YStack, Text } from 'ui/src';
import { Mail, Github, Gitlab, Linkedin, Space } from '@tamagui/lucide-icons';
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
              <Paragraph fontSize="$8" fontStyle='italic'>
                This Website is Developed and Maintained By K.S.R PHANI BHUSHAN
              </Paragraph>
            </Bounce>
          </XStack>
        </Zoom>
        <Slide right>
          <Paragraph fontWeight='700' fontSize="$8" fontStyle="italic" >
            If there are any issues, please Try reach out to My Mail:{developerEmail}
           
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
              <Button bg='peru' onPress={() => openLink('https://gitlab.com/phani25')}>
                <Gitlab /><Text fontSize='$6' fontWeight='500' fontStyle='italic'> GitLab </Text>
              </Button>
            </Slide>
            <Slide right>
              <Button bg='peru' onPress={() => openLink('https://github.com/Phani2525')}>
                <Github /> <Text fontSize='$6' fontWeight='500' fontStyle='italic'>GitHub</Text> 
              </Button>
            </Slide>
            <Slide left>
                <Button bg='peru' onPress={() => openLink('https://www.linkedin.com/in/phani-bhushan-131b1327a/')}>
                <Linkedin /><Text fontSize='$6' fontWeight='500' fontStyle='italic'>LinkedIn
                </Text>
              </Button>
            </Slide>
          </XStack>
        </Zoom>
      </YStack>
    </YStack>
  );
}
