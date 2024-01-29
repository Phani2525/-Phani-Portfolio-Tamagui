import React from 'react';
import { YStack, H2, Button, Text } from 'ui';
import { LinkStack } from 'app/components/LinkStack';

export const SettingsInfo = () => {
  return (
    <YStack space p="$3">
      <H2>About Me</H2>
      <Text fontSize={24} fontStyle="italic">
        Experienced Software Engineer with a strong foundation in Web and Mobile Application Development. Proficient in
        HTML, CSS, React.Js, React-Native, TypeScript, JavaScript, and a range of Front-End Technologies.
      </Text>

      <Text fontSize={24} fontStyle="italic">
        Basic knowledge of Next.Js and Nest.Js for Full-Stack Development. Possesses a moderated level of DevOps skills,
        including writing YAML codes, creating Helm Charts, and maintaining EC2 instances with AWS. Skilled in
        Kubernetes, capable of managing Clusters, Docker containers, and Pods, as well as creating and managing
        Namespaces.
      </Text>

      <Text fontSize={24} fontStyle="italic">
        Experienced in Custom-Debian Operating Systems and Linux environments, leveraging tools like VirtualBox, Boxes,
        Rancher, OpenLens, K9s, and DigitalOcean for efficient DevOps processes. Committed to delivering high-quality
        solutions on time, fostering collaboration, and staying updated with industry trends.
      </Text>

      <Text marginTop="$12" fontSize={28} fontStyle="italic">
        As a passionate individual, I am also actively engaged in freelancing, offering services in React Native for
        mobile app development, as well as providing expertise in creating static and dynamic websites. My interest
        extends to Kubernetes and DevOps services, ensuring efficient deployment and management of applications in cloud
        environments. I am excited about the opportunity to collaborate on innovative projects and contribute to the
        success of your endeavors.
      </Text>

      <LinkStack href="/contact" hoverStyle={{ backgroundColor: '$backgroundPress' }} paddingVertical="$3">
        <Button>Contact Now</Button>
      </LinkStack>
    </YStack>
  );
};
