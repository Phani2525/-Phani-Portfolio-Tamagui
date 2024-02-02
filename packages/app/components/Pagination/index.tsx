import React from 'react'
import { ScrollView, XStack, YStack, Button, Text, View } from 'ui'
import { ChevronsLeft, ChevronsRight } from '@tamagui/lucide-icons'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange?: (page: number) => void
  searchQuery?: string
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  searchQuery,
}) => {
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i)

  return (
    <YStack>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <XStack p="$4" space="$1.5" jc="center">
          {currentPage !== 1 && (
            <Button
              onPress={() => onPageChange?.(currentPage - 1)}
              borderRadius="$0"
              borderWidth="$0.5"
              borderColor="gray"
              p="$3"
              fontSize="$6"
              style={{ minHeight: 40, alignItems: 'center', justifyContent: 'center' }}
            >
              <ChevronsLeft size="$1.5" />
              <Text marginBottom="$1.5">Prev</Text>
            </Button>
          )}
          {range(1, totalPages).map((page) => (
            <Button
              key={page}
              onPress={() => onPageChange?.(page)}
              bg={page === currentPage ? '$gray8light' : undefined}
              borderWidth="$0.5"
              borderColor="gray"
              borderRadius="$0"
              p="$3"
              fontSize="$4"
              style={{ minHeight: 40, alignItems: 'center', justifyContent: 'center' }}
            >
              <Text>{page}</Text>
            </Button>
          ))}
          {currentPage !== totalPages && (
            <Button
              onPress={() => onPageChange?.(currentPage + 1)}
              borderRadius="$0"
              borderWidth="$0.5"
              borderColor="gray"
              p="$3"
              fontSize="$6"
              style={{
                minHeight: 40,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text alignSelf="center" mr="$0.5" mb="$1">
                Next
              </Text>
              <View style={{ alignSelf: 'center', marginLeft: -4 }}>
                <ChevronsRight size="$1.5" />
              </View>
            </Button>
          )}
        </XStack>
      </ScrollView>
      {/* <Text fontSize={24} alignSelf="flex-end" style={{ padding: 10 }}>
        Page {currentPage} of {totalPages}
      </Text> */}
    </YStack>
  )
}

export default Pagination
