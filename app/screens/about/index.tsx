import React from 'react';
import { YStack, XStack, Text, SimpleImage, useMedia, ScrollView } from 'ui';
import { Header } from 'app/components/Header';
import { Fade, Slide } from 'react-reveal';

const AboutScreen = () => {
  const icon = require('app/assets/icon.png');
  const jsIcon = require('app/assets/icon.png'); // Replace with the actual JavaScript icon
  const htmlCssIcon = require('app/assets/icon.png'); // Replace with the actual HTML and CSS icon
  const kubernetesIcon = require('app/assets/icon.png'); // Replace with the actual Kubernetes icon
  const debianIcon = require('app/assets/icon.png'); // Replace with the actual Debian icon
  const nextjsIcon = require('app/assets/icon.png'); // Replace with the actual Next.js icon
  const media = useMedia();

  return (
    <YStack fullscreen>
      <Header />
      <ScrollView>
        {/* TypeScript Section */}
        <Fade>
          <Slide left>
            <XStack
              flexDirection={media.xs ? 'column' : 'row'}
              marginTop="$19"
              space="$4"
              alignItems={media.xs ? 'center' : 'flex-start'}
              borderBottomWidth="$0.25"
              width="100%"
            >
              <Text
                padding="$10"
                color="palegreen"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '14px' : '20px' }}
                marginBottom="$4"
              >
                As a passionate developer, I specialize in TypeScript, leveraging its type system to build robust and
                maintainable code. With a keen eye for detail, I ensure the reliability and scalability of my projects,
                fostering a seamless development experience.
              </Text>
              <SimpleImage
                width={400}
                height={400}
                src={icon}
                marginLeft={media.xs ? 0 : '$10'}
                marginRight={media.xs ? 0 : '$10'}
                marginTop="$4"
                marginBottom="$10"
              />
            </XStack>
          </Slide>
        </Fade>

        {/* JavaScript Section */}
        <Fade>
          <Slide right>
            <XStack
              flexDirection={media.xs ? 'column' : 'row-reverse'}
              marginTop="$19"
              space="$4"
              alignItems={media.xs ? 'center' : 'flex-start'}
              borderBottomWidth="$0.25"
              width="100%"
            >
              <Text
                padding="$7"
                color="palegreen"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '14px' : '20px' }}
                marginBottom="$4"
              >
                With a strong foundation in JavaScript, I bring dynamic and interactive features to life. My expertise
                in modern JavaScript frameworks empowers me to create engaging and user-friendly web applications.
              </Text>
              <SimpleImage
                width={400}
                height={400}
                src={icon}
                marginLeft={media.xs ? 0 : '$10'}
                marginRight={media.xs ? 0 : '$10'}
                marginTop="$4"
                marginBottom="$10"
              />
            </XStack>
          </Slide>
        </Fade>

        {/* HTML and CSS Section */}
        <Fade>
          <Slide left>
            <XStack
              flexDirection={media.xs ? 'column' : 'row'}
              marginTop="$19"
              space="$4"
              alignItems={media.xs ? 'center' : 'flex-start'}
              borderBottomWidth="$0.25"
              width="100%"
            >
              <Text
                padding="$10"
                color="palegreen"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '14px' : '20px' }}
                marginBottom="$4"
              >
                Proficient in crafting visually appealing and responsive user interfaces using HTML and CSS. My
                attention to design principles ensures a delightful user experience across different devices and screen
                sizes.
              </Text>
              <SimpleImage
                width={400}
                height={400}
                src={icon}
                marginLeft={media.xs ? 0 : '$10'}
                marginRight={media.xs ? 0 : '$10'}
                marginTop="$4"
                marginBottom="$10"
              />
            </XStack>
          </Slide>
        </Fade>

        {/* Kubernetes Section */}
        <Fade>
          <Slide right>
            <XStack
              flexDirection={media.xs ? 'column' : 'row-reverse'}
              marginTop="$19"
              space="$4"
              alignItems={media.xs ? 'center' : 'flex-start'}
              borderBottomWidth="$0.25"
              width="100%"
            >
              <Text
                padding="$7"
                color="palegreen"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '14px' : '20px' }}
                marginBottom="$4"
              >
                Deeply experienced in orchestrating and managing containerized applications with Kubernetes. My skills
                in containerization contribute to scalable and efficient deployment strategies.
              </Text>
              <SimpleImage
                width={400}
                height={400}
                src={icon}
                marginLeft={media.xs ? 0 : '$10'}
                marginRight={media.xs ? 0 : '$10'}
                marginTop="$4"
                marginBottom="$10"
              />
            </XStack>
          </Slide>
        </Fade>

        {/* Custom Debian Operating Systems Section */}
        <Fade>
          <Slide left>
            <XStack
              flexDirection={media.xs ? 'column' : 'row'}
              marginTop="$19"
              space="$4"
              alignItems={media.xs ? 'center' : 'flex-start'}
              borderBottomWidth="$0.25"
              width="100%"
            >
              <Text
                padding="$10"
                color="palegreen"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '14px' : '20px' }}
                marginBottom="$4"
              >
                Passionate about customizing and optimizing Debian-based operating systems. My expertise in tailoring
                operating systems ensures a tailored and secure environment for various applications and purposes.
              </Text>
              <SimpleImage
                width={400}
                height={400}
                src={icon}
                marginLeft={media.xs ? 0 : '$10'}
                marginRight={media.xs ? 0 : '$10'}
                marginTop="$4"
                marginBottom="$10"
              />
            </XStack>
          </Slide>
        </Fade>

        {/* Next.js Section */}
        <Fade>
          <Slide right>
            <XStack
              flexDirection={media.xs ? 'column' : 'row-reverse'}
              marginTop="$19"
              space="$4"
              alignItems={media.xs ? 'center' : 'flex-start'}
              borderBottomWidth="$0.25"
              width="100%"
            >
              <Text
                padding="$7"
                color="palegreen"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '14px' : '20px' }}
                marginBottom="$4"
              >
                Proficient in building performant and scalable web applications with Next.js. Leveraging the power of
                server-side rendering and a component-based architecture to create seamless user experiences.
              </Text>
              <SimpleImage
                width={400}
                height={400}
                src={icon}
                marginLeft={media.xs ? 0 : '$10'}
                marginRight={media.xs ? 0 : '$10'}
                marginTop="$4"
                marginBottom="$10"
              />
            </XStack>
          </Slide>
        </Fade>
      </ScrollView>
    </YStack>
  );
};

export default AboutScreen;
