import React, { useState, useEffect } from 'react';
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
} from 'ui';
import { SketchPicker } from 'react-color';
import { useThemeState } from 'app/state/theme';
// import { addTheme, updateTheme,replaceTheme } from '@tamagui/theme';

interface Props {
  onThemeChange?: (value: string) => void;
  theme?: string;
}

export const Themes = ({ onThemeChange, theme }: Props) => {
  const defaultColors = {
    PRIMARY: '#007bff',
    SECONDARY: '#6c757d',
    BACKGROUND: '#1F538E',
    FOREGROUND: '#343a40',
    TABS: '#17a2b8',
  };

  const [isDarkTheme, setIsDarkTheme] = useState(theme === 'dark' || false);
  const [themeColors, setThemeColors] = useState(defaultColors);
  const [selectedColor, setSelectedColor] = useState('#fff');
  const [activeColorType, setActiveColorType] = useState('');
  const update = useForceUpdate();
  const themeState = useThemeState();

  const handleThemeChange = (newRootTheme, newSubTheme) => {
    themeState.setRoot(newRootTheme);
    themeState.setSub(newSubTheme);
  };

  useEffect(() => {
    if (!onThemeChange) return;
    const theme = isDarkTheme ? 'dark' : 'light';
    onThemeChange(theme);
  }, [isDarkTheme]);

  // useIsomorphicLayoutEffect(() => {
  //   addTheme({
  //     name: 'myTheme',
  //     insertCSS: true,
  //     theme: {
  //       color: 'yellow',
  //       color2: 'green',
  //     },
  //   });
  //   // themeState.setRoot('myTheme');
  //   themeState.setSub('');
  // }, []);

  const handleColorChange = (color) => {
    console.log('color', color);
    setSelectedColor(color.hex);
    setThemeColors((prevColors) => ({
      ...prevColors,
      [activeColorType]: color.hex,
    }));
    // replaceTheme({
    //   name: 'myTheme',
    //   theme: {
    //     color: color.hex,
    //     background: color.hex,
    //     borderColor: undefined,
    //   },
    // });
    update();
  };

  const getAlert = () => {
    alert('Hello! Your theme has been set!');
  };

  const selectColorType = (colorType) => {
    setActiveColorType(colorType);
    setSelectedColor(themeColors[colorType]);
  };

  const themeStyle = {
    backgroundColor: themeColors.BACKGROUND,
    color: themeColors.FOREGROUND,
  };

  const primaryStyle = {
    backgroundColor: themeColors.PRIMARY,
  };

  const secondaryStyle = {
    backgroundColor: themeColors.SECONDARY,
  };

  const tabsStyle = {
    backgroundColor: themeColors.TABS,
  };

  const foregroundStyle = {
    color: themeColors.FOREGROUND,
    borderColor: themeColors.FOREGROUND,
  };

  return (
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
                <Button br={0} onClick={() => selectColorType(color)} style={{ backgroundColor: themeColors[color] }}>
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
            {isDarkTheme ? <Text color="white">Dark</Text> : <Text style={foregroundStyle}>Light</Text>}
          </XStack>
          <XStack space>
            <Button style={primaryStyle} onClick={getAlert}>
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
  );
};
