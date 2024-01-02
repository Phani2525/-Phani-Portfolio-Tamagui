import { Plus } from '@tamagui/lucide-icons';
import React from 'react';
import { H2, YStack, Paragraph, XStack, H3, Button } from 'ui';
import type { YStackProps } from 'ui';

export const UserSettings = (props: YStackProps) => {
  return (
    <YStack {...props}>
      <YStack p="$4" backgroundColor="$blue10Dark">
        <H2 fow="500">User Settings</H2>
      </YStack>
      <YStack space p="$4" backgroundColor="white">
        <Paragraph color="$gray10Dark">Manage your Api Keys</Paragraph>
        <XStack ai="center" space>
          <H3 color="$blue1Dark">Api Keys:</H3>
          <Button elevation="$2">
            <Plus />
          </Button>
        </XStack>
      </YStack>
    </YStack>
  );
};
