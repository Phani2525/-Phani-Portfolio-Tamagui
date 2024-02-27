import { FilterButton } from './index';
import React from 'react';

export default {
  title: 'components/FilterButton',
  component: FilterButton,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = (args) => <FilterButton {...args} />;
