import React from 'react'
import { YStack, XStack, Text, SimpleImage, Button, ScrollView, H3 } from 'ui'
import { Header } from 'app/components/Header'
import { Zoom } from 'react-reveal'
import { LinkStack } from 'app/components/LinkStack'

const HomeScreen = () => {
  const icon = require('app/assets/icon.png')
  const background = require('app/assets/background1.png')

  const resumeFileLink = 'https://drive.google.com/uc?id=1RSUJK6mC0yZMLmGEWbkcDz1XzwRVG0oY'

  const handleDownloadClick = () => {
    const link = document.createElement('a')
    link.href = resumeFileLink
    link.download = 'PhaniBhushan_Resume.pdf'
    link.click()
  }

  return (
    <YStack
      fullscreen
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}
    >
      <Header />
      <ScrollView>
        <XStack justifyContent="space-between" padding={20}>
          <Zoom duration={800} delay={200}>
            <YStack marginTop="$20" ai="center" space="$6">
              <H3 color="darkgoldenrod" fontSize="$10" fontWeight="700" fontStyle="italic">
                I'm
              </H3>
              <H3 fontSize="$12" color="lightseagreen" fontStyle="italic">
                {' '}
                K.S.R PHANI BHUSHAN
              </H3>
              <Text fontSize={18} fontStyle="italic">
                Growing React Native Developer | Expanding Skills in JavaScript and TypeScript for
                both Mobile and Web Applications.
              </Text>

              <LinkStack href="/about">
                <Button
                  backgroundColor="firebrick"
                  hoverStyle={{ backgroundColor: 'firebrick', transform: [{ scale: 1.1 }] }}
                >
                  <Text fontSize={24} fontStyle="italic">
                    About Me
                  </Text>
                </Button>
              </LinkStack>

              {/* Download CV Button */}
              <Button
                onPress={handleDownloadClick}
                backgroundColor="seagreen"
                marginTop="$4"
                hoverStyle={{ backgroundColor: 'seagreen', transform: [{ scale: 1.1 }] }}
              >
                <Text fontSize={24} fontStyle="italic">
                  Download_CV
                </Text>
              </Button>
            </YStack>
          </Zoom>
          <Zoom duration={800} delay={400}>
            <SimpleImage src={icon} width={900} height={800} />
          </Zoom>
        </XStack>
      </ScrollView>
    </YStack>
  )
}

export default HomeScreen
