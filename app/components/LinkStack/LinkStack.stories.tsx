import React from 'react';
import { LinkStack } from './index';
import { Disc } from '@tamagui/lucide-icons';
import { Text } from 'ui';

export default {
  title: 'components/LinkStack',
  component: LinkStack,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = (args) => (
  <LinkStack href="" {...args}>
    <Disc />
    <Text>Disk</Text>
  </LinkStack>
);
