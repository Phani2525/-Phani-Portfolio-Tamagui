import React from 'react';
import { BottomMenu } from './index';
import { Button } from 'tamagui';

export default {
  title: 'components/BottomMenu',
  component: BottomMenu,
  parameters: { status: { type: 'beta' } },
};

export const main = () => (
  <BottomMenu>
    <Button> 1</Button>
    <Button> 2</Button>
    <Button> 3</Button>
  </BottomMenu>
);
