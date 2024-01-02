import React from 'react';
import { IndicatorSection } from './index';

export default {
  title: 'components/IndicatorSection',
  component: IndicatorSection,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export const main = () => <IndicatorSection />;
