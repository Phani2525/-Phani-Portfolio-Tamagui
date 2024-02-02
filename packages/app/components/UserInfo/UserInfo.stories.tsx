import React from 'react';
import { UserInfo } from './index';

export default {
  title: 'Components/UserInfo',
  component: UserInfo,
  parameters: {
    status: { type: 'beta' },
  },
};

export const Default = () => <UserInfo />;
