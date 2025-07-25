import React from 'react'
import { YStack, H2, Button, Text } from 'ui'
import { LinkStack } from 'app/components/LinkStack'
import { Zoom, Fade } from 'react-reveal'

export const SettingsInfo = () => {
  const backgroundImage = require('app/assets/background1.png')

  return (
    <YStack
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <YStack>
        <Zoom>
          <YStack ai="center" fontStyle="italic">
            <Text fontWeight="700" color="orangered" fontSize={34} fontStyle="italic">
              About Me
            </Text>
          </YStack>
          <YStack marginTop="$6" style={{ marginBottom: '24px' }}>
            <Text fontSize={24} fontStyle="italic" color="#ddd">
              Experienced Software Engineer with a strong foundation in Web and Mobile Application
              Development. Proficient in HTML, CSS, React.Js, React-Native, TypeScript, JavaScript,
              and a range of Front-End Technologies.
            </Text>
          </YStack>

          <YStack style={{ marginBottom: '24px' }}>
            <Text fontSize={24} fontStyle="italic" color="#ddd">
              Basic knowledge of Next.Js and Nest.Js for Full-Stack Development. Possesses a
              moderated level of DevOps skills, including writing YAML codes, creating Helm Charts,
              and maintaining EC2 instances with AWS. Skilled in Kubernetes, capable of managing
              Clusters, Docker containers, and Pods, as well as creating and managing Namespaces.
            </Text>
          </YStack>

          <YStack style={{ marginBottom: '24px' }}>
            <Text fontSize={24} fontStyle="italic" color="#ddd">
              Experienced in Custom-Debian Operating Systems and Linux environments, leveraging
              tools like VirtualBox, Boxes, Rancher, OpenLens, K9s, and DigitalOcean for efficient
              DevOps processes. Committed to delivering high-quality solutions on time, fostering
              collaboration, and staying updated with industry trends.
            </Text>
          </YStack>

          <YStack>
            <Text marginBottom={6} fontSize={24} fontStyle="italic" color="#fff">
              As a passionate individual, I am also actively engaged in freelancing, offering
              services in React Native for mobile app development, as well as providing expertise in
              creating static and dynamic websites. My interest extends to Kubernetes and DevOps
              services, ensuring efficient deployment and management of applications in cloud
              environments. I am excited about the opportunity to collaborate on innovative projects
              and contribute to the success of your endeavors.
            </Text>
          </YStack>

          <LinkStack jc="center" href="/contact">
            <Fade>
              <Button marginTop="$6" backgroundColor="slateblue">
                <Text fontWeight="600">Get in Touch</Text>
              </Button>
            </Fade>
          </LinkStack>
        </Zoom>
      </YStack>
    </YStack>
  )
}
