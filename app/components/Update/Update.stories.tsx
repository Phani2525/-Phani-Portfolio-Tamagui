import React from 'react';
import { Update } from './index';

export default {
  title: 'Components/Update',
  component: Update,
  parameters: {
    status: { type: 'beta' },
  },
};

export const Default = () => <Update />;
