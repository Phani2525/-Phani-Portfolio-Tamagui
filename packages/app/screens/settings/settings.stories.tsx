import { Settings } from './index';
import React from 'react';

export default {
  title: 'screens/Settings',
  component: Settings,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = (args) => <Settings {...args} />;
