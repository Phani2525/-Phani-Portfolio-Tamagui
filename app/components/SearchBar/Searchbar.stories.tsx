import React from 'react';
import { SearchBar } from './index';

export default {
  title: 'components/SearchBar',
  component: SearchBar,
  parameters: {
    status: { type: 'beta' },
  },
};

export const main = () => <SearchBar />;
