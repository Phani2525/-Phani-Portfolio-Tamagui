import React from 'react';
import { TopIndicator } from './index';

export default {
  title: 'components/TopIndicator',
  component: TopIndicator,
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

export const main = (args) => <TopIndicator {...args} />;

main.args = {
  cpuUsage: 0.7,
  memoryUsage: 0.3,
};
