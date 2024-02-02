import React from 'react';
import { Pagination } from './index';

export default {
  title: 'components/Pagination',
  component: Pagination,
  parameters: {
    status: {
      type: 'beta',
    },
  },
  argTypes: {
    onPageChange: { action: 'changed page' },
  },
};

const Template = (args) => <Pagination {...args} />;

export const Main = Template.bind({});
Main.args = {
  totalPages: 10,
  currentPage: 1,
};
