import React from 'react'
import { YStack, XStack, Text, Button, ScrollView, H3, Card } from 'ui'
import { Header } from 'app/components/Header'
import { Zoom } from 'react-reveal'
import { LinkStack } from 'app/components/LinkStack'
import { SolitoImage } from 'solito/image'
import { Analytics } from '@vercel/analytics/react'

const HomeScreen = () => {
  const icon = require('app/assets/mypic.png')
  const background = require('app/assets/background1.png')
  const [height, setHeight] = React.useState(400)

  const resumeFileLink = 'https://drive.google.com/uc?id=1RSUJK6mC0yZMLmGEWbkcDz1XzwRVG0oY'

  const handleDownloadClick = () => {
    const link = document.createElement('a')
    link.href = resumeFileLink
    link.download = 'PhaniBhushan_Resume.pdf'
    link.click()
  }

  return (
    <Card fullscreen>
      <Card.Background height={height}>
        <SolitoImage
          src={background}
          resizeMode="cover"
          alt="background"
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
        />
      </Card.Background>
      <YStack
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          minHeight: '100vh',
        }}
        onLayout={(e) => setHeight(e.nativeEvent.layout.height)}
      >
        <Header />
        <ScrollView>
          <XStack justifyContent="space-between" padding={20}>
            <Zoom duration={800} delay={200}>
              {' '}
              {/* Wrap the content with Zoom */}
              <YStack marginTop="$20" ai="center" space="$6">
                <H3 color="darkgoldenrod" fontSize="$10" fontWeight="700" fontStyle="italic">
                  I'm
                </H3>
                <H3 fontSize="$12" color="lightseagreen" fontStyle="italic">
                  {' '}
                  K.S.R PHANI BHUSHAN
                </H3>
                <Text fontSize={19} fontStyle="italic">
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
            <Zoom duration={800} delay={200}>
              {' '}
              {/* Wrap the icon with Zoom */}
              <SolitoImage src={icon} width={900} height={800} alt="Solito Image" />
            </Zoom>
          </XStack>
          <Analytics />
        </ScrollView>
      </YStack>
    </Card>
  )
}

export default HomeScreen
