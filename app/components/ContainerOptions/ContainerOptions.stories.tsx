import { ContainerOptions } from './index';
import React from 'react';

export default {
  title: 'components/ContainerOptions',
  component: ContainerOptions,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = (args) => <ContainerOptions {...args} />;

main.args = {
  container_name: 'test',
};
