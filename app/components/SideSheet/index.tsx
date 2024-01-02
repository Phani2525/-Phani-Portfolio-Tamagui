import { ScrollView, YStack } from 'ui';
import React, { useEffect } from 'react';
import { Menu, X } from '@tamagui/lucide-icons';

interface SideSheetProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function SideSheet({ children, onOpenChange, ...props }: SideSheetProps) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (props.open) setOpen(props.open);
  }, [props.open]);

  useEffect(() => {
    if (onOpenChange) onOpenChange(open);
  }, [open]);

  function renderSideMenu() {
    return (
      <>
        <YStack
          pos="absolute"
          top={0}
          right={0}
          left={0}
          bottom={0}
          zi={999}
          enterStyle={{ x: 100 }}
          backgroundColor="rgba(0,0,0,0.5)"
          onPress={() => setOpen(false)}
        />
        <YStack
          backgroundColor="$backgroundFocus"
          enterStyle={{ x: 100 }}
          borderTopLeftRadius="$6"
          borderBottomLeftRadius="$6"
          {...props}
          minWidth={150}
          pos="absolute"
          top={0}
          right={0}
          bottom={0}
          zi={999}
        >
          <YStack ai="flex-end" right={10} top={10} cur="pointer" onPress={() => setOpen(false)} zi={34}>
            <X />
          </YStack>
          <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        </YStack>
      </>
    );
  }

  function renderMenu() {
    return (
      <YStack pos="absolute" top={10} right={10} cursor="pointer" onPress={() => setOpen(true)} zi={30}>
        <Menu size={24} />
      </YStack>
    );
  }

  return (
    <YStack position="absolute" top={0} right={0} bottom={open ? 0 : undefined} left={0} zi={999}>
      {open ? renderSideMenu() : renderMenu()}
    </YStack>
  );
}
