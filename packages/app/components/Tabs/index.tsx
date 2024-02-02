import React from 'react';
import type { TabsContentProps, TabsProps, TabsListProps } from 'tamagui';
import { Separator, Tabs, YStack, isWeb } from 'tamagui';

type SimpleTabsProps = TabsProps & {
  tabs: React.JSX.Element;
  orientation?: 'horizontal' | 'vertical';
  tabStyle?: TabsListProps;
  contentStyle?: TabsContentProps;
};

export function SimpleTabs({ tabs, orientation, tabStyle, children, ...props }: SimpleTabsProps) {
  const orientationView = orientation || 'horizontal';
  return (
    <YStack
      paddingHorizontal="$4"
      {...(isWeb && {
        position: 'unset' as any,
      })}
    >
      <Tabs
        orientation={orientationView}
        flexDirection={orientationView === 'horizontal' ? 'column' : 'row'}
        width={400}
        height={150}
        borderRadius="$4"
        borderWidth="$0.25"
        overflow="hidden"
        borderColor="$borderColor"
        x={-18}
        {...props}
      >
        <Tabs.List
          disablePassBorderRadius="bottom"
          aria-label="Manage your account"
          {...tabStyle}
          separator={<Separator vertical={orientationView === 'vertical'} />}
        >
          {tabs}
        </Tabs.List>
        <Separator vertical={orientationView === 'vertical'} />
        {children}
      </Tabs>
    </YStack>
  );
}

export const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  );
};
