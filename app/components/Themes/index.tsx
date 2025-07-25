import React, { useState, useEffect } from 'react'
import {
  YStack,
  H2,
  H3,
  XStack,
  Button,
  Text,
  ScrollView,
  Switch,
  useForceUpdate,
  replaceTheme,
  addTheme,
  updateTheme,
  useIsomorphicLayoutEffect,
  Theme,
} from 'ui'
import { SketchPicker } from 'react-color'
import Fade from 'react-reveal/Fade' // Importing Fade from react-reveal for animations

interface Props {
  onThemeChange?: (value: string) => void
  theme?: string
}

export const Themes = ({ onThemeChange, theme }: Props) => {
  const defaultColors = {
    PRIMARY: '#007bff',
    SECONDARY: '#6c757d',
    BACKGROUND: '#1F538E',
    FOREGROUND: '#343a40',
    TABS: '#17a2b8',
  }

  const [isDarkTheme, setIsDarkTheme] = useState(theme === 'dark' || true) // Enabled dark theme by default
  const [themeColors, setThemeColors] = useState(defaultColors)
  const [selectedColor, setSelectedColor] = useState('#fff')
  const [activeColorType, setActiveColorType] = useState('')
  const update = useForceUpdate()

  useEffect(() => {
    if (!onThemeChange) return
    const theme = isDarkTheme ? 'dark' : 'light'
    onThemeChange(theme)
  }, [isDarkTheme])

  const handleColorChange = (color) => {
    console.log('color', color)
    setSelectedColor(color.hex)
    setThemeColors((prevColors) => ({
      ...prevColors,
      [activeColorType]: color.hex,
    }))
    update()
  }

  const getAlert = () => {
    alert('Hello! Your theme has been set!')
  }

  const selectColorType = (colorType) => {
    setActiveColorType(colorType)
    setSelectedColor(themeColors[colorType])
  }

  const themeStyle = {
    backgroundColor: themeColors.BACKGROUND,
    color: themeColors.FOREGROUND,
  }

  const primaryStyle = {
    backgroundColor: themeColors.PRIMARY,
  }

  const secondaryStyle = {
    backgroundColor: themeColors.SECONDARY,
  }

  const tabsStyle = {
    backgroundColor: themeColors.TABS,
  }

  const foregroundStyle = {
    color: themeColors.FOREGROUND,
    borderColor: themeColors.FOREGROUND,
  }

  return (
    <Fade>
      {' '}
      {/* Wrapping the entire component with Fade for smooth animations */}
      <YStack space p="$3" style={themeStyle}>
        <Theme>
          <YStack jc="center" p="$3">
            <H2 style={foregroundStyle}>Theme Settings</H2>
            <Text style={themeStyle}>Theme Text</Text>
          </YStack>
          <H3 style={foregroundStyle}>Colors:</H3>
          <ScrollView horizontal={true}>
            <XStack ai="center" p="$3">
              {Object.keys(defaultColors).map((color, index) => (
                <XStack ai="center" key={index}>
                  <Button br={0} style={{ backgroundColor: themeColors[color] }}>
                    <Text>{color}</Text>
                  </Button>
                </XStack>
              ))}
            </XStack>
          </ScrollView>
          <YStack space p="$3" style={foregroundStyle}>
            <SketchPicker color={selectedColor} onChange={handleColorChange} />
            <H2 style={foregroundStyle}>Logo:</H2>
            <XStack space ai="center">
              <Switch checked={isDarkTheme} onCheckedChange={setIsDarkTheme} size="$3">
                <Switch.Thumb animation="quick" />
              </Switch>
              {isDarkTheme ? (
                <Text color="white">Dark</Text>
              ) : (
                <Text style={foregroundStyle}>Light</Text>
              )}
            </XStack>
            <XStack space>
              <Button style={primaryStyle} onPress={getAlert}>
                SET
              </Button>
              <Button style={secondaryStyle}>RESET</Button>
            </XStack>
            <YStack p="$3" style={tabsStyle}>
              <Text style={foregroundStyle}>Tabs Area</Text>
            </YStack>
          </YStack>
        </Theme>
      </YStack>
    </Fade>
  )
}
