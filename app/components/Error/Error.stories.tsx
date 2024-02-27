import React from 'react';
import ErrorScreen from './index';

export default {
  title: 'components/Error',
  component: ErrorScreen,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = () => <ErrorScreen />;
