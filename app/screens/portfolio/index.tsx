import React, { useState, useEffect, useRef } from 'react'
import { YStack, Text, Card, XStack, H2, ScrollView, Button } from 'ui'
import { Header } from 'app/components/Header'
import { ArrowRight, ArrowLeft } from '@tamagui/lucide-icons'
import { Fade } from 'react-reveal'
import { SolitoImage } from 'solito/image'
import './PortfolioScreen.css'

interface Project {
  name: string
  description: string
  image: string
  githubLink: string
}

const PortfolioScreen: React.FC = () => {
  const projects: Project[] = [
    // Example project objects
    {
      name: 'Phani s Portfolio',
      description: 'A Basic Portfolio Website with Smooth Animations',
      image: require('app/assets/portfolio.png'),
      githubLink: 'https://github.com/Phani2525/-Phani-Portfolio-Tamagui',
    },
    {
      name: 'Multiplatform Project',
      description:
        'A React Native Template supports MultiPlatforms using Multiplatform.one NPM package',
      image: require('app/assets/multiplatform.png'),
      githubLink: 'https://github.com/Phani2525/-Multiplatform-Project-Template',
    },
    {
      name: 'Experience Hub',
      description: 'An AI ChatBot Application',
      image: require('app/assets/AI.png'),
      githubLink: 'https://github.com/Phani2525/experiencehub',
    },
    {
      name: 'CyberCode-OS',
      description: 'A Cyber Security Operating System for Software Developers',
      image: require('app/assets/cyberOS.png'),
      githubLink: 'https://github.com/Phani2525/project1',
    },
    {
      name: 'GK-Creations',
      description: 'A Local Business Website',
      image: require('app/assets/GK.png'),
      githubLink: 'https://github.com/Phani2525/project1',
    },
    {
      name: 'TamaGUI-Skeleton',
      description: 'A Skeleton for TamaGUI',
      image: require('app/assets/skeleton.png'),
      githubLink: 'https://github.com/Phani2525/TamaGUI-Skeleton',
    },
    {
      name: 'CyberDoc-Converter',
      description: 'A Basic Document Converter Supporting Multiple Formats',
      image: require('app/assets/cyberdoc.png'),
      githubLink: 'https://github.com/Phani2525/Cyber-Doc-Converter',
    },
  ]

  const background = require('app/assets/background1.png') // Update with your background image
  const scrollViewRef = useRef<any>(null) // Changed to any to bypass type checking issues
  const [autoScroll, setAutoScroll] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    setAutoScroll(false) // Stop auto-scroll when user manually scrolls
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: direction === 'left' ? -400 : 400, y: 0, animated: true })
    }
  }

  useEffect(() => {
    if (autoScroll && scrollViewRef.current) {
      const interval = setInterval(() => {
        scrollViewRef.current?.scrollTo({ x: 400, y: 0, animated: true }) // Added optional chaining
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [autoScroll])

  const [height, setHeight] = React.useState(900)

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
        fullscreen
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          minHeight: '100vh',
        }}
      >
        <Header />
        <H2 marginTop="$6" space fontSize={40} alignSelf="center">
          <Text fontStyle="italic">My Portfolio</Text>
        </H2>
        <Button
          onPress={() => scroll('left')}
          style={{
            position: 'absolute',
            left: 20,
            top: '50%',
            zIndex: 1,
            transform: 'translateY(-50%)',
          }}
        >
          <ArrowLeft size={30} color="powderblue" />
        </Button>
        <Button
          onPress={() => scroll('right')}
          style={{
            position: 'absolute',
            right: 20,
            top: '50%',
            zIndex: 1,
            transform: 'translateY(-50%)',
          }}
        >
          <ArrowRight size={30} color="powderblue" />
        </Button>
        <ScrollView horizontal ref={scrollViewRef}>
          <XStack
            marginTop="$8"
            space
            justifyContent="space-evenly"
            className="xStackContainer" // Apply the class for CSS styling
          >
            {projects.map((project, index) => (
              <Fade key={index} duration={800} delay={index * 200}>
                <Card
                  backgroundColor="$gray7Dark"
                  space="$1"
                  width={400}
                  height={600}
                  margin="$2"
                  padding="$5"
                >
                  <SolitoImage
                    src={project.image}
                    alt={project.name} // Add alt attribute with project name
                    style={{ width: '100%', height: '70%', borderRadius: 10 }}
                  />
                  <YStack jc="center" ai="center" marginTop="$2">
                    <Text fontStyle="italic" fontSize={28} fontWeight="bold" color="orange">
                      {project.name}
                    </Text>
                    <Text fontStyle="italic" fontSize={20} marginTop="$2">
                      {project.description}
                    </Text>
                    {/* GitHub Link within the card */}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        backgroundColor: '$primary',
                        color: '#fff',
                        padding: '10px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginTop: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text color="orange" fontWeight="600" fontSize={16}>
                        View Project on GitHub
                      </Text>
                    </a>
                  </YStack>
                </Card>
              </Fade>
            ))}
          </XStack>
        </ScrollView>
      </YStack>
    </Card>
  )
}

export default PortfolioScreen
