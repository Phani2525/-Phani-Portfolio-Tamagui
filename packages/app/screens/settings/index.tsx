import React, { useState } from 'react'
import { YStack, XStack, Text, ScrollView, Tabs, useMedia, Theme } from 'ui'
import { Info, PaintBucket, Mountain } from '@tamagui/lucide-icons'
import { SettingsInfo } from 'app/components/SettingsInfo'
import { Themes } from 'app/components/Themes'
import { SimpleTabs, TabsContent } from 'app/components/Tabs'
import { Header } from 'app/components/Header'
import type { ColorScheme } from 'app/state/theme'
import { useThemeState } from 'app/state/theme'
import { Platform } from 'react-native'
import { UserInfo } from 'app/components/UserInfo'

export const Settings = () => {
  const defaultColors = {
    PRIMARY: '#007bff',
    SECONDARY: '#6c757d',
    BACKGROUND: '#1F538E',
    FOREGROUND: '#343a40',
    TABS: '#17a2b8',
  }
  const themeState = useThemeState()
  const media = useMedia()
  const [themeColors, setThemeColors] = useState(defaultColors)
  const background = require('app/assets/background1.png')

  const mobileView = Platform.OS === 'android' || Platform.OS === 'ios' || media.xs

  const foregroundStyle = {
    color: themeColors.FOREGROUND,
    borderColor: themeColors.FOREGROUND,
  }

  function handleThemeChange(theme: ColorScheme) {
    themeState.setRoot(theme)
  }

  function renderTabs() {
    const flex = mobileView ? 1 : 0
    const tabStyle = {
      ...foregroundStyle,
      justifyContent: 'flex-start',
      flex: flex,
    }
    return (
      <>
        <Tabs.Tab value="info" jc="flex-start" flex={flex}>
          <XStack space="$3">
            <Info size="$1" />
            <Text fontFamily="$body">Info</Text>
          </XStack>
        </Tabs.Tab>
        <Tabs.Tab value="theme" jc="flex-start" flex={flex}>
          <XStack space="$3">
            <PaintBucket size="$1" />
            <Text fontFamily="$body">Theme</Text>
          </XStack>
        </Tabs.Tab>
        <Tabs.Tab value="Admin Info" jc="flex-start" flex={flex}>
          <XStack space="$3">
            <Mountain size="$1" />
            <Text fontFamily="$body">Admin Info</Text>
          </XStack>
        </Tabs.Tab>
      </>
    )
  }

  return (
    <YStack
      fullscreen
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh' }}
    >
      <Theme>
        <Header />
        <SimpleTabs
          animation="lazy"
          enterStyle={{ x: -100 }}
          tabs={renderTabs()}
          width="100%"
          height="100%"
          orientation={mobileView ? 'horizontal' : 'vertical'}
          borderWidth={0}
          bg="$blue2"
          defaultValue="info"
        >
          <ScrollView showsHorizontalScrollIndicator={false}>
            <TabsContent value="info">
              <SettingsInfo />
            </TabsContent>
            <TabsContent value="theme">
              <Themes onThemeChange={handleThemeChange} theme={themeState.root} />
            </TabsContent>
            <TabsContent value="Admin Info">
              <UserInfo />
            </TabsContent>
          </ScrollView>
        </SimpleTabs>
      </Theme>
    </YStack>
  )
}

export default Settings
