import React, { useState } from 'react';
import { YStack, XStack, Input } from 'ui';
import { Search } from '@tamagui/lucide-icons';

export interface SearchBarProps {
  onChangeText?: (query: string) => void;
  disabled?: boolean;
}

export const SearchBar = ({ onChangeText, disabled }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (onChangeText) onChangeText(text);
  };

  return (
    <YStack space p="$3">
      <XStack space ai="center" als="center" animation="lazy" enterStyle={{ y: 200 }}>
        <Input
          placeholder="Search"
          width={400}
          value={inputValue}
          onChangeText={handleInputChange}
          paddingLeft="$8"
          disabled={disabled}
        />
        <YStack position="absolute" ml="$2">
          <Search size="$1" />
        </YStack>
      </XStack>
    </YStack>
  );
};
