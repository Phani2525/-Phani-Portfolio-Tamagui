import React, { useState } from 'react';
import type { YStackProps } from 'ui';
import { YStack, Text, SimplePopover, XStack, useMedia } from 'ui';
import {
  AppWindow,
  LayoutDashboard,
  Sheet,
  Box,
  Settings,
  Disc,
  Database,
  Network,
  ChevronDown,
  ChevronUp,
} from '@tamagui/lucide-icons';
import { Platform } from 'react-native';
import { LinkStack } from 'app/components/LinkStack';

type SideBarProps = YStackProps & {};

export const SideBar = ({ ...props }: SideBarProps) => {
  const media = useMedia();
  const [showResources, setShowResources] = useState<boolean>(false);
  const mobileView = Platform.OS === 'ios' || Platform.OS === 'android' || media.xs;

  const handleToggleResources = () => {
    setShowResources((prev) => !prev);
  };

  function getResources() {
    const x = mobileView ? 20 : 0;
    return (
      <YStack>
        <LinkStack
          href="/resources/images"
          x={x}
          hoverStyle={{ backgroundColor: '$backgroundPress' }}
          paddingVertical="$3"
        >
          <Disc />
          <Text selectable={false} cur="pointer">
            Images
          </Text>
        </LinkStack>
        <LinkStack
          href="/resources/volumes"
          x={x}
          hoverStyle={{ backgroundColor: '$backgroundPress' }}
          paddingVertical="$3"
        >
          <Database />
          <Text selectable={false} cur="pointer">
            Volumes
          </Text>
        </LinkStack>
        <LinkStack
          href="/resources/networks"
          x={x}
          hoverStyle={{ backgroundColor: '$backgroundPress' }}
          paddingVertical="$3"
        >
          <Network />
          <Text selectable={false} cur="pointer">
            Networks
          </Text>
        </LinkStack>
      </YStack>
    );
  }

  function renderResources() {
    if (mobileView) {
      return (
        <LinkStack href="/" onPress={handleToggleResources} notLink>
          <Box />
          <Text selectable={false}>Resources</Text>
          {showResources ? <ChevronUp /> : <ChevronDown />}
        </LinkStack>
      );
    }

    return (
      <SimplePopover
        trigger={
          <XStack
            cur="pointer"
            space="$2"
            paddingHorizontal="$4"
            jc="flex-start"
            ai="center"
            onPress={handleToggleResources}
            hoverStyle={{ backgroundColor: '$backgroundFocus', borderRadius: '$3' }}
          >
            <Box />
            <Text cur="pointer" selectable={false}>
              Resources
            </Text>
            {showResources ? <ChevronUp /> : <ChevronDown />}
          </XStack>
        }
      >
        {getResources()}
      </SimplePopover>
    );
  }

  return (
    <YStack {...props}>
      <LinkStack href="/" jc="center" hoverStyle={{ backgroundColor: '$backgroundFocus', borderRadius: '$3' }}>
        <LayoutDashboard />
        <Text selectable={false} cursor="pointer">
          Dashboard
        </Text>
      </LinkStack>
      <LinkStack
        href="/containers"
        jc="center"
        hoverStyle={{ backgroundColor: '$backgroundFocus', borderRadius: '$3' }}
      >
        <AppWindow />
        <Text selectable={false} cursor="pointer">
          Containers
        </Text>
      </LinkStack>
      <LinkStack href="/compose" jc="center" hoverStyle={{ backgroundColor: '$backgroundFocus', borderRadius: '$3' }}>
        <Sheet />
        <Text selectable={false} cursor="pointer">
          Compose
        </Text>
      </LinkStack>
      {renderResources()}
      {showResources && mobileView && getResources()}
      <LinkStack href="/settings" hoverStyle={{ backgroundColor: '$backgroundFocus', borderRadius: '$3' }}>
        <Settings />
        <Text selectable={false} cursor="pointer">
          Settings
        </Text>
      </LinkStack>
    </YStack>
  );
};
