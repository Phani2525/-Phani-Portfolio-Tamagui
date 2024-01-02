import React, { Component } from 'react';
import type { ReactNode } from 'react';
import type { useToastController } from '@tamagui/toast';

export interface ErrorBoundaryProps {
  children: ReactNode;
  toastController: ReturnType<typeof useToastController>;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  componentDidCatch(err: Error) {
    this.props.toastController.show(this.getErrorMessage(err));
  }

  render() {
    return <>{this.props.children}</>;
  }

  private getErrorMessage(err: Error) {
    if (typeof err === 'string') return err;
    if (typeof err === 'object' && err.message) return err.message;
    return err.toString();
  }
}
