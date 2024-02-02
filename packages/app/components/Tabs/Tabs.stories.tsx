import React from 'react';
import { SimpleTabs, TabsContent } from './index';
import { H5, SizableText, Tabs } from "ui"/ui";

export default {
  title: 'components/Tabs',
  component: SimpleTabs,
  parameters: { status: { type: 'beta' } },
};

const horizontalTabs = () => (
  <>
    <Tabs.Tab flex={1} value="tab1">
      <SizableText fontFamily="$body">Profile</SizableText>
    </Tabs.Tab>
    <Tabs.Tab flex={1} value="tab2">
      <SizableText fontFamily="$body">Connections</SizableText>
    </Tabs.Tab>
    <Tabs.Tab flex={1} value="tab3">
      <SizableText fontFamily="$body">Notifications</SizableText>
    </Tabs.Tab>
  </>
);

export const horizontal = () => (
  <SimpleTabs tabs={horizontalTabs()} defaultValue="tab1">
    <TabsContent value="tab1">
      <H5>Profile</H5>
    </TabsContent>

    <TabsContent value="tab2">
      <H5>Connections</H5>
    </TabsContent>

    <TabsContent value="tab3">
      <H5>Notifications</H5>
    </TabsContent>
  </SimpleTabs>
);

const verticalTabs = () => (
  <>
    <Tabs.Tab flex={1} value="tab1">
      <SizableText fontFamily="$body">Profile</SizableText>
    </Tabs.Tab>
    <Tabs.Tab flex={1} value="tab2">
      <SizableText fontFamily="$body">Connections</SizableText>
    </Tabs.Tab>
    <Tabs.Tab flex={1} value="tab3">
      <SizableText fontFamily="$body">Notifications</SizableText>
    </Tabs.Tab>
  </>
);

export const vertical = () => (
  <SimpleTabs tabs={verticalTabs()} orientation="vertical">
    <TabsContent value="tab1">
      <H5>Profile</H5>
    </TabsContent>

    <TabsContent value="tab2">
      <H5>Connections</H5>
    </TabsContent>

    <TabsContent value="tab3">
      <H5>Notifications</H5>
    </TabsContent>
  </SimpleTabs>
);
