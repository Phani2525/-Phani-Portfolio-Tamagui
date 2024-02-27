import React from 'react';
import { AccordionLabel } from './index';

export default {
  title: 'components/AccordionLabel',
  component: AccordionLabel,
  parameters: { status: { type: 'beta' } },
};

export const main = (args) => <AccordionLabel {...args} />;

main.args = {
  status: 'running',
};
