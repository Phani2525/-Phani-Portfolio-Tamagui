import { ImageControls } from './index';
import React from 'react';

export default {
  title: 'components/ImageControls',
  component: ImageControls,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = () => <ImageControls />;
