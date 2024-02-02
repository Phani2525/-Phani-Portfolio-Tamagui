import React from 'react';
import { TemplateVariables } from './index';

export default {
  title: 'components/TemplateVariables',
  component: TemplateVariables,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const Default = () => <TemplateVariables item1="variable" item2="replacement" />;
