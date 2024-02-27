import { PortButton } from './index';
import React from 'react';

export default {
  title: 'components/PortButton',
  component: PortButton,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = () => <PortButton port="5432" />;
