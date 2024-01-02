import React from 'react';
import { Themes } from './index';

export default {
  title: 'Components/Themes',
  component: Themes,
  parameters: {
    status: { type: 'beta' },
  },
};

export const Default = () => <Themes />;
