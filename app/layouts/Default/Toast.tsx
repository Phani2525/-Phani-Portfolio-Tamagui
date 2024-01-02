import React from 'react';
import { YStack } from 'ui';
import { useToastState, Toast as TamaguiToast } from '@tamagui/toast';

export function Toast() {
  const toastState = useToastState();

  return (
    toastState && (
      <TamaguiToast
        animation="quick"
        duration={toastState?.duration}
        enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
        exitStyle={{ opacity: 0, scale: 1, y: -20 }}
        key={toastState?.id}
        m="$4"
        opacity={1}
        scale={1}
        viewportName={toastState?.viewportName}
        y={0}
      >
        <YStack>
          <TamaguiToast.Title col={toastState?.color}>{toastState?.title}</TamaguiToast.Title>
          {!!toastState?.message && <TamaguiToast.Description>{toastState?.message}</TamaguiToast.Description>}
        </YStack>
      </TamaguiToast>
    )
  );
}
