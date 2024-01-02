import React from 'react';
import { SideBar } from './index';

export default {
  title: 'components/SideBar',
  component: SideBar,
  parameters: { status: { type: 'beta' } },
};

export const main = () => <SideBar flexDirection="row" width="100%" jc="space-evenly" />;
