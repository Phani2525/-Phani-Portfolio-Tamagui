import React, { useState, useEffect } from 'react'
import { XStack, Text, Checkbox } from 'ui'
import { Check } from '@tamagui/lucide-icons'

interface FilterButtonProps {
  onFiltersChange?: (selectedFilters: string[]) => void
}

export const FilterButton: React.FC<FilterButtonProps> = ({ onFiltersChange }) => {
  const filterOptions = [
    { label: 'Name', value: 'Name' },
    { label: 'Project', value: 'Project' },
    { label: 'Status', value: 'Status' },
    { label: 'Image', value: 'Image' },
    { label: 'Ports', value: 'Ports' },
    { label: 'Created At', value: 'Created At' },
  ]

  const [selectedFilters, setSelectedFilters] = useState<string[]>(
    filterOptions.map((option) => option.value)
  )

  const toggleFilter = (value: string) => {
    if (selectedFilters.includes(value)) {
      setSelectedFilters((prev) => prev.filter((filter) => filter !== value))
    } else {
      setSelectedFilters((prev) => [...prev, value])
    }
  }

  useEffect(() => {
    if (typeof onFiltersChange === 'function') {
      onFiltersChange(selectedFilters)
    }
  }, [selectedFilters, onFiltersChange])

  return (
    <>
      {filterOptions.map((option) => (
        <XStack animation="lazy" enterStyle={{ y: 50 }} space key={option.value}>
          <Checkbox
            checked={selectedFilters.includes(option.value)}
            onClick={() => toggleFilter(option.value)}
          >
            <Checkbox.Indicator>
              <Check />
            </Checkbox.Indicator>
          </Checkbox>
          <Text>{option.label}</Text>
        </XStack>
      ))}
    </>
  )
}
