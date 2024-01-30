import React from 'react';
import { YStack, Text, Button, SimpleImage, XStack, ScrollView } from 'ui';
import { Header } from 'app/components/Header';
import { Linkedin, Github, Gitlab, Mail } from '@tamagui/lucide-icons';

const ContactScreen = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const openEmailClient = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const contactImage = require('app/assets/contact.png');
  const background = require('app/assets/background1.png');

  return (
    <YStack fullscreen style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Header />
      <ScrollView>
        <XStack space="$4" alignItems="center" justifyContent="center" width="100%" height="100%">
          <SimpleImage src={contactImage} width={750} height={800} />

          {/* Text and Buttons on the Right Side */}
          <YStack alignItems="center" space="$3" width="50%" padding="$4">
            <Text marginBottom="$10" fontSize={44} fontWeight="bold" textAlign="center">
              Contact Me
            </Text>

            <Text fontSize={30} fontStyle="italic" textAlign="center" maxWidth="700px">
              Feel free to reach out to me for any inquiries, collaboration, or just to say hello. You can connect with
              me through the following channels:
            </Text>

            {/* Social Media Links */}
            <Button
              onPress={() => openLinkInNewTab('https://github.com/Phani2525')}
              width="200px"
              backgroundColor="$blue"
            >
              <Github size={24} color="white" />
              <Text fontSize="$5" color="$white" marginLeft="$1">
                GitHub
              </Text>
            </Button>

            <Button
              onPress={() => openLinkInNewTab('https://gitlab.com/phani25')}
              width="200px"
              backgroundColor="$green"
            >
              <Gitlab size={24} color="white" />
              <Text fontSize="$5" color="$white" marginLeft="$1">
                GitLab
              </Text>
            </Button>

            <Button
              onPress={() => openLinkInNewTab('https://www.linkedin.com/in/phani-bhushan-131b1327a/')}
              width="200px"
              backgroundColor="$blue"
            >
              <Linkedin size={24} color="white" />
              <Text fontSize="$5" color="$white" marginLeft="$1">
                LinkedIn
              </Text>
            </Button>

            {/* <Button
              onPress={() => openLinkInNewTab('https://www.discord.com/phanibhushan25')}
              width="200px"
              backgroundColor="$purple"
            >
              <Text fontSize="$5" color="$white" marginRight="$1">
                Discord
              </Text>
            </Button> */}

            <Button onPress={() => openEmailClient('kotharuphani@gmail.com')} width="200px" backgroundColor="$red">
              <Mail size={24} color="white" />
              <Text fontSize="$5" color="$white" marginLeft="$1">
                Email
              </Text>
            </Button>

            <Text fontSize="$8" color="$white" marginTop="$2">
              If you're interested in collaborating, have a project, or just want to say hi, feel free to drop me an
              email!
            </Text>
          </YStack>
        </XStack>
      </ScrollView>
    </YStack>
  );
};

export default ContactScreen;
