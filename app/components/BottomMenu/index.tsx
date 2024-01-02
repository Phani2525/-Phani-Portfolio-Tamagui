import React from 'react';
import { YStack } from 'ui';

interface BottomMenuProps {
  children: React.ReactNode;
}

export const BottomMenu = ({ children }: BottomMenuProps) => {
  return (
    <YStack
      pos="absolute"
      bottom={0}
      left={0}
      right={0}
      borderTopRightRadius="$3"
      borderTopLeftRadius="$3"
      flexDirection="row"
      jc="space-between"
      backgroundColor="$background"
    >
      {children}
    </YStack>
  );
};
