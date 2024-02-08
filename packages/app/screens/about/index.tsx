import React from 'react'
import { YStack, XStack, Text, useMedia, ScrollView, H2 } from 'ui'
import { Header } from 'app/components/Header'
import { Fade, Slide } from 'react-reveal'
import { SolitoImage } from 'solito/image'

const AboutScreen = () => {
  const TS = require('app/assets/TS.png')
  const JS = require('app/assets/JS.png') // Replace with the actual JavaScript icon
  const HTML = require('app/assets/HTML.png') // Replace with the actual HTML and CSS icon
  const kubernetes = require('app/assets/kubernetes.png') // Replace with the actual Kubernetes icon
  const debian = require('app/assets/customdebian.png') // Replace with the actual Debian icon
  const nextjs = require('app/assets/next.png') // Replace with the actual Next.js icon
  const media = useMedia()
  const background = require('app/assets/background1.png')

  return (
    <YStack style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }} fullscreen>
      <Header />
      <ScrollView><H2 marginTop='$4.5' alignSelf='center' fontSize='$10' fontStyle='italic'>A Bit About My Self</H2>
        {/* TypeScript Section */}
        <Fade>
          
          <Slide left>
            <XStack
              flexDirection={media.xs ? 'column' : 'row'}
              marginTop="$10"
              space="$4"
              alignItems={media.xs ? 'center' : 'flex-start'}
              borderBottomWidth="$0.25"
              width="100%"
             
              paddingRight='$8'
            >
              <Text
                padding="$10"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '18px' : '26px' }}
                marginBottom="$4"
              >
                As a passionate developer, I specialize in TypeScript, leveraging its type system to
                build robust and maintainable code. With a keen eye for detail, I ensure the
                reliability and scalability of my projects, fostering a seamless development
                experience.
              </Text>
              <SolitoImage
                width={400}
                height={400}
                src={TS}
                alt="TypeScript Icon"
                style={{ marginLeft: media.xs ? 0 : '$10', marginRight: media.xs ? 0 : '$10', marginTop: '$4', marginBottom: '$10' }}
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
              paddingLeft='$8'
             
             
>
              <Text
                padding="$7"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '18px' : '26px' }}
                marginBottom="$4"
              >
                With a strong foundation in JavaScript, I bring dynamic and interactive features to
                life. My expertise in modern JavaScript frameworks empowers me to create engaging
                and user-friendly web applications.
              </Text>
              <SolitoImage
                width={400}
                height={400}
                src={JS}
                alt="JavaScript Icon"
                style={{ marginLeft: media.xs ? 0 : '$10', marginRight: media.xs ? 0 : '$10', marginTop: '$4', marginBottom: '$10' }}
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
              paddingRight="$8" // Changed paddingX to padding
            >
              <Text
                padding="$10"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '18px' : '26px' }}
                marginBottom="$4"
              >
                Proficient in crafting visually appealing and responsive user interfaces using HTML
                and CSS. My attention to design principles ensures a delightful user experience
                across different devices and screen sizes.
              </Text>
              <SolitoImage
                width={400}
                height={400}
                src={HTML}
                alt="HTML and CSS Icon"
                style={{ marginLeft: media.xs ? 0 : '$10', marginRight: media.xs ? 0 : '$10', marginTop: '$4', marginBottom: '$10' }}
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
              paddingLeft="$8" // Changed paddingX to padding
            >
              <Text
                padding="$7"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '18px' : '26px' }}
                marginBottom="$4"
              >
                Deeply experienced in orchestrating and managing containerized applications with
                Kubernetes. My skills in containerization contribute to scalable and efficient
                deployment strategies.
              </Text>
              <SolitoImage
                width={400}
                height={400}
                src={kubernetes}
                alt="Kubernetes Icon"
                style={{ marginLeft: media.xs ? 0 : '$10', marginRight: media.xs ? 0 : '$10', marginTop: '$4', marginBottom: '$10' }}
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
              paddingRight="$8" // Changed paddingX to padding
            >
              <Text
                padding="$10"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '18px' : '26px' }}
                marginBottom="$4"
              >
                Passionate about customizing and optimizing Debian-based operating systems. My
                expertise in tailoring operating systems ensures a tailored and secure environment
                for various applications and purposes.
              </Text>
              <SolitoImage
                width={400}
                height={400}
                src={debian}
                alt="Debian Icon"
                style={{ marginLeft: media.xs ? 0 : '$10', marginRight: media.xs ? 0 : '$10', marginTop: '$4', marginBottom: '$10' }}
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
              paddingLeft="$8" // Changed paddingX to padding
            >
              <Text
                padding="$7"
                fontStyle="italic"
                marginTop="$12"
                style={{ fontSize: media.xs ? '18px' : '26px' }}
                marginBottom="$4"
              >
                Proficient in building performant and scalable web applications with Next.js.
                Leveraging the power of server-side rendering and a component-based architecture to
                create seamless user experiences.
              </Text>
              <SolitoImage
                width={400}
                height={400}
                src={nextjs}
                alt="Next.js Icon"
                style={{ marginLeft: media.xs ? 0 : '$10', marginRight: media.xs ? 0 : '$10', marginTop: '$4', marginBottom: '$10' }}
              />
            </XStack>
          </Slide>
        </Fade>
      </ScrollView>
    </YStack>
  )
}

export default AboutScreen


