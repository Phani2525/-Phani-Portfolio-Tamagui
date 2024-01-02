import React from 'react';
import { ComposeActions } from './index';

export default {
  title: 'components/ComposeActions',
  component: ComposeActions,
  parameters: { status: { type: 'beta' } },
};

export const main = () => <ComposeActions />;
