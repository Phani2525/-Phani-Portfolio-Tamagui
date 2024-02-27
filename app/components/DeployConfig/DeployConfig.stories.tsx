import { DeployConfig } from './index';
import React from 'react';

export default {
  title: 'components/DeployConfig',
  component: DeployConfig,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = (args) => <DeployConfig {...args} />;
