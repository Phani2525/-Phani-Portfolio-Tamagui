import React from 'react';
import { Loader } from './index';

export default {
  title: 'components/Loader',
  component: Loader,
  parameters: { status: { type: 'beta' } },
};

export const main = (args) => <Loader {...args} />;

main.args = {
  isLoading: true,
  text: 'Loading',
};
