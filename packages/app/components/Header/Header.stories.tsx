import { Header } from './index';
import React from 'react';

export default {
  title: 'components/Header',
  component: Header,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = () => <Header />;
