import React from 'react'
import { YStack, Text, Button, XStack, ScrollView, Card } from 'ui'
import { Header } from 'app/components/Header'
import { Linkedin, Github, Gitlab, Mail } from '@tamagui/lucide-icons'
import Slide from 'react-reveal/Slide'
import { SolitoImage } from 'solito/image'

const ContactScreen = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank')
  }

  const openEmailClient = (email) => {
    window.location.href = `mailto:${email}`
  }

  const contactImage = require('app/assets/contact.png')
  const background = require('app/assets/background1.png')
  const [height, setHeight] = React.useState(950)

  return (
    <Card fullscreen>
      <Card.Background height={height}>
        <SolitoImage
          src={background}
          alt="background"
          resizeMode="cover"
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
        />
      </Card.Background>
      <YStack
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          minHeight: '100vh',
        }}
      >
        <Header />
        <ScrollView>
          <XStack space="$4" alignItems="center" justifyContent="center" width="100%" height="100%">
            <Slide top>
              <SolitoImage src={contactImage} alt="Contact Image" width={750} height={800} />
            </Slide>

            {/* Text and Buttons on the Right Side */}
            <YStack alignItems="center" space="$3" width="50%" padding="$4">
              <Slide right delay={300}>
                <Text
                  fontStyle="italic"
                  marginBottom="$10"
                  fontSize={44}
                  fontWeight="bold"
                  textAlign="center"
                  color="springgreen"
                >
                  Contact Me
                </Text>
              </Slide>

              <Text fontSize={30} fontStyle="italic" textAlign="center" maxWidth={700}>
                Feel free to reach out to me for any inquiries, collaboration, or just to say hello.
                You can connect with me through the following channels:
              </Text>

              <Slide left delay={100}>
                <Button
                  onMouseEnter={(e) =>
                    e.currentTarget.style.setProperty('background-color', 'purple', 'important')
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.style.setProperty('background-color', 'slateblue', 'important')
                  }
                  style={{ backgroundColor: 'slateblue' }}
                  onPress={() => openLinkInNewTab('https://github.com/Phani2525')}
                  width="$14"
                >
                  <Github size={24} color="white" />
                  <Text fontWeight="600" fontSize="$5" color="white" marginLeft="$1">
                    GitHub
                  </Text>
                </Button>
              </Slide>

              <Slide left delay={200}>
                <Button
                  onMouseEnter={(e) =>
                    e.currentTarget.style.setProperty('background-color', 'purple', 'important')
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.style.setProperty('background-color', 'slateblue', 'important')
                  }
                  style={{ backgroundColor: 'slateblue' }}
                  onPress={() => openLinkInNewTab('https://gitlab.com/phani25')}
                  width="$14"
                >
                  <Gitlab size={24} color="white" />
                  <Text fontWeight="600" fontSize="$5" color="white" marginLeft="$1">
                    GitLab
                  </Text>
                </Button>
              </Slide>

              <Slide left delay={300}>
                <Button
                  onMouseEnter={(e) =>
                    e.currentTarget.style.setProperty('background-color', 'purple', 'important')
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.style.setProperty('background-color', 'slateblue', 'important')
                  }
                  style={{ backgroundColor: 'slateblue' }}
                  onPress={() =>
                    openLinkInNewTab('https://www.linkedin.com/in/phani-bhushan-131b1327a/')
                  }
                  width="$14"
                >
                  <Linkedin size={24} color="white" />
                  <Text fontWeight="600" fontSize="$5" color="white" marginLeft="$1">
                    LinkedIn
                  </Text>
                </Button>
              </Slide>

              <Slide left delay={400}>
                <Button
                  onMouseEnter={(e) =>
                    e.currentTarget.style.setProperty('background-color', 'purple', 'important')
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.style.setProperty('background-color', 'slateblue', 'important')
                  }
                  style={{ backgroundColor: 'slateblue' }}
                  onPress={() => openEmailClient('kotharuphani@gmail.com')}
                  width="$14"
                >
                  <Mail size={24} color="white" />
                  <Text fontWeight="600" fontSize="$5" color="white" marginLeft="$1">
                    Email
                  </Text>
                </Button>
              </Slide>

              <Slide bottom delay={500}>
                <Text fontSize="$8" color="$white" marginTop="$2">
                  If you're interested in collaborating, have a project, or just want to say hi,
                  feel free to Contact Me...!!
                </Text>
              </Slide>
            </YStack>
          </XStack>
        </ScrollView>
      </YStack>
    </Card>
  )
}

export default ContactScreen
