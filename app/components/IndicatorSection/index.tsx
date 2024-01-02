import React from 'react';
import { YStack, XStack } from 'ui';

export const IndicatorSection = () => {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  return (
    <YStack p="$4" backgroundColor="$blue6Dark">
      <XStack space als="flex-end">
        {data.map((item) => (
          <YStack bc="$blue4Light" key={item.id} bw={1} h={20} w={40} />
        ))}
      </XStack>
    </YStack>
  );
};
