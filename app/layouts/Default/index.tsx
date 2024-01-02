import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { Toast } from './Toast';
import { ToastViewport, useToastController } from '@tamagui/toast';
import { ZStack } from 'ui';
import { config } from 'app/config';
import { createWithLayout } from 'multiplatform.one';
import { withDebugLayout } from '../Debug';

export interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const toastController = useToastController();

  useEffect(() => {
    toastController.hide();
  }, []);

  return (
    <ZStack fullscreen>
      <Toast />
      <ToastViewport
        flexDirection="column-reverse"
        top={0}
        right={0}
        cursor="pointer"
        onPress={() => toastController.hide()}
      />
      <ErrorBoundary toastController={toastController}>{children}</ErrorBoundary>
    </ZStack>
  );
}

export const withDefaultLayout = createWithLayout(DefaultLayout, config.get('DEBUG') === '1' ? [withDebugLayout] : []);
