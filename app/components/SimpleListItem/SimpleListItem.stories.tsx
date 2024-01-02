import React from 'react';
import { SimpleList, SimpleListItem } from './index';
import { ChevronRight, Star } from '@tamagui/lucide-icons';
import { Label, Separator, Switch, XStack, YStack } from 'tamagui';

export default {
  title: 'components/SimpleListItem',
  component: SimpleList,
  parameters: {
    status: { type: 'beta' },
  },
};

function Main() {
  const [orientation, setOrientation] = React.useState(true);
  return (
    <YStack fullscreen>
      <XStack width={200} alignItems="center" space="$4" alignSelf="flex-start">
        <Label paddingRight="$0" minWidth={90} justifyContent="flex-end" size="$2">
          {orientation ? 'Horizontal' : 'Vertical'}
        </Label>
        <Separator minHeight={20} vertical />
        <Switch size="$2" defaultChecked={orientation} onCheckedChange={setOrientation}>
          <Switch.Thumb animation="quick" />
        </Switch>
      </XStack>
      <SimpleList orientation={orientation ? 'horizontal' : 'vertical'}>
        <SimpleListItem title="hello" icon={Star} subTitle="how are you" iconAfter={ChevronRight} width={200} />
        <SimpleListItem title="hello" icon={Star} subTitle="how are you" iconAfter={ChevronRight} width={200} />
        <SimpleListItem title="hello" icon={Star} subTitle="how are you" iconAfter={ChevronRight} width={200} />
        <SimpleListItem title="hello" icon={Star} subTitle="how are you" iconAfter={ChevronRight} width={200} />
        <SimpleListItem title="hello" icon={Star} subTitle="how are you" iconAfter={ChevronRight} width={200} />
      </SimpleList>
    </YStack>
  );
}

export const main = () => <Main />;
