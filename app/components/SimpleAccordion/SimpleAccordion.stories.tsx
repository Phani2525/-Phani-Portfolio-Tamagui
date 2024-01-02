import React from 'react';
import { AccordionItem, SimpleAccordion } from './index';
import { YStack, Text } from 'tamagui';

export default {
  title: 'components/SimpleAccordion',
  component: SimpleAccordion,
  parameters: {
    status: { type: 'beta' },
  },
};

export const main = (args) => (
  <SimpleAccordion {...args}>
    <AccordionItem trigger={<Text>Trigger Apple </Text>} value="apple">
      <YStack padding="$4">
        <Text> Apple Content</Text>
      </YStack>
    </AccordionItem>
    <AccordionItem trigger={<Text>Trigger Banana </Text>} value="banana">
      <YStack padding="$4">
        <Text>Banana Content</Text>
      </YStack>
    </AccordionItem>
    <AccordionItem trigger={<Text>Trigger Orange </Text>} value="orange">
      <YStack padding="$4">
        <Text>Orange Content</Text>
      </YStack>
    </AccordionItem>
  </SimpleAccordion>
);
