import { ContainerCard } from './index';
import React from 'react';

export default {
  title: 'components/ContainerCard',
  component: ContainerCard,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = (args) => <ContainerCard {...args} />;

main.args = {
  name: 'Yacht',
};
