import React from 'react';
import { SettingsInfo } from './index';

export default {
  title: 'components/SettingsInfo',
  component: SettingsInfo,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = () => <SettingsInfo />;
