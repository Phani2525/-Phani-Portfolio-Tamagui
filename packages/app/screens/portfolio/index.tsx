import React from 'react'
import { YStack, Text, Card, XStack, H2, ScrollView } from 'ui' // Changed SimpleImage to SolitoImage
import { Header } from 'app/components/Header'
import { ArrowRight } from '@tamagui/lucide-icons'
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
    {
      name: 'Phani s Portfolio',
      description: 'A Bsasic Portfolio Website with Smooth Animations',
      image: require('app/assets/portfolio.png'),
      githubLink: 'https://github.com/Phani2525/-Phani-Portfolio-Tamagui',
    },
    {
      name: 'Multiplatform Project',
      description: 'A Multiplatform Project Template with React Native and React Web',
      image: require('app/assets/multiplatform.png'),
      githubLink: 'https://github.com/Phani2525/-Multiplatform-Project-Template',
    },
    {
      name: 'Experience Hub',
      description: 'An AI ChatBot Application ',
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

    // Add more projects as needed
  ]

  const background = require('app/assets/background1.png') // Update with your background image

  return (
    <YStack
      fullscreen
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}
    >
      <Header />
      <H2 marginTop="$6" space fontSize={40} alignSelf="center">
        <Text fontStyle="italic">My Portfolios</Text>
      </H2>
      <ScrollView horizontal>
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
                width="400px"
                height="500px"
                margin="$2"
                padding="$5"
              >
                <SolitoImage
                  src={project.image as any}
                  alt={project.name} // Add alt attribute with project name
                  style={{ width: '100%', height: '70%', borderRadius: 10 }}
                />
                <YStack jc="center" ai="center" marginTop="$2">
                  <Text fontStyle="italic" fontSize={28} fontWeight="bold">
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
                      marginTop: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text fontSize={16}>View Project on GitHub</Text>
                    <ArrowRight size={20} color="#fff" style={{ marginLeft: '5px' }} />
                  </a>
                </YStack>
              </Card>
            </Fade>
          ))}
        </XStack>
      </ScrollView>
    </YStack>
  )
}

export default PortfolioScreen
