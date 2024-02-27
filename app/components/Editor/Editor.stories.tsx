import { Editor } from './index';
import React from 'react';

export default {
  title: 'components/Editor',
  component: Editor,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = (args) => <Editor {...args} />;
