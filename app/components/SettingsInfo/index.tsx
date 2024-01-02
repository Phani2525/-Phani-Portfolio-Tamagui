import React from 'react';
import { YStack, H2, XStack, Button, Text, Input } from 'ui';
import { Paperclip } from '@tamagui/lucide-icons';

export const SettingsInfo = () => {
  return (
    <YStack space p="$3">
      <YStack jc="center" p="$3">
        <H2>Server Settings</H2>
      </YStack>
      <Text p="$3">This is where you can change settings related to your server.</Text>
      <YStack space p="$3" ai="flex-start" jc="flex-start">
        <H2>Import</H2>
        <XStack space ai="center">
          <Paperclip />
          <Input placeholder="Import export.json" />
        </XStack>
        <Button>IMPORT</Button>
        <H2>Export</H2>
        <Button>EXPORT</Button>
      </YStack>
    </YStack>
  );
};
