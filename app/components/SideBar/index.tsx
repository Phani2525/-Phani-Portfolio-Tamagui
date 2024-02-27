import React,  from 'react';
import type { YStackProps } from "ui";
import { YStack, Text,  useMedia } from "ui";
import {

  LayoutDashboard,

  Settings,

  Contact2,
} from '@tamagui/lucide-icons';
import { Platform } from 'react-native';
import { LinkStack } from 'app/components/LinkStack';

type SideBarProps = YStackProps & {};

export const SideBar = ({ ...props }: SideBarProps) => {
  const media = useMedia();
  const mobileView = Platform.OS === 'ios' || Platform.OS === 'android' || media.xs;

 

  return (
    <YStack {...props}>
      <LinkStack href="/" jc="center">
        <LayoutDashboard />
        <Text selectable={false} cursor="pointer">
          Home
        </Text>
      </LinkStack>
      <LinkStack href="/about" jc="center">
        <LayoutDashboard /> 
        <Text selectable={false} cursor="pointer">
          About
        </Text>
      </LinkStack>
      <LinkStack href="/services" jc="center">
        <LayoutDashboard /> 
        <Text selectable={false} cursor="pointer">
          Services
        </Text>
      </LinkStack>
      <LinkStack href="/portfolio" jc="center">
        <LayoutDashboard /> 
        <Text selectable={false} cursor="pointer">
          Portfolio
        </Text>
      </LinkStack>
      <LinkStack href="/contact" jc="center">
        <Contact2 />
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
