import React, { useState } from 'react';
import type { YStackProps } from 'ui';
import { YStack, Text, SimplePopover, XStack, useMedia } from 'ui';
import {
  AppWindow,
  LayoutDashboard,
  Sheet,
  Box,
  Settings,
  ChevronDown,
  ChevronUp,
  Contact2,
} from '@tamagui/lucide-icons';
import { Platform } from 'react-native';
import { LinkStack } from 'app/components/LinkStack';

type SideBarProps = YStackProps & {};

export const SideBar = ({ ...props }: SideBarProps) => {
  const media = useMedia();
  // const [showResources, setShowResources] = useState<boolean>(false);
  const mobileView = Platform.OS === 'ios' || Platform.OS === 'android' || media.xs;

  // const handleToggleResources = () => {
  //   setShowResources((prev) => !prev);
  // };

  // function renderResources() {
  //   const x = mobileView ? 20 : 0;
  //   return (
  //     <YStack>
  //       <LinkStack
  //         href="/resources/images"
  //         x={x}
  //         hoverStyle={{ backgroundColor: '$backgroundPress' }}
  //         paddingVertical="$3"
  //       >
  //         <Box />
  //         <Text selectable={false} cur="pointer">
  //           Images
  //         </Text>
  //       </LinkStack>
  //       {/* Include other resource links as needed */}
  //     </YStack>
  //   );
  // }

  return (
    <YStack {...props}>
      <LinkStack href="/" jc="center">
        <LayoutDashboard />
        <Text selectable={false} cursor="pointer">
          Home
        </Text>
      </LinkStack>
      <LinkStack href="/about" jc="center">
        <LayoutDashboard /> {/* You can replace this icon with the appropriate one for 'About' */}
        <Text selectable={false} cursor="pointer">
          About
        </Text>
      </LinkStack>
      <LinkStack href="/service" jc="center">
        <LayoutDashboard /> {/* You can replace this icon with the appropriate one for 'Services' */}
        <Text selectable={false} cursor="pointer">
          Services
        </Text>
      </LinkStack>
      <LinkStack href="/portfolio" jc="center">
        <LayoutDashboard /> {/* You can replace this icon with the appropriate one for 'Portfolio' */}
        <Text selectable={false} cursor="pointer">
          Portfolio
        </Text>
      </LinkStack>
      <LinkStack href="/contact" jc="center">
        <Contact2 /> {/* You can replace this icon with the appropriate one for 'Contact' */}
        <Text selectable={false} cursor="pointer">
          Contact
        </Text>
      </LinkStack>
      <LinkStack href="/settings">
        <Settings />
        <Text selectable={false} cursor="pointer">
          Settings
        </Text>
      </LinkStack>
    </YStack>
  );
};
