import React from 'react'
import { Popover } from 'ui'
import {
  ListRestart,
  Play,
  StopCircle,
  Trash2,
  ArrowBigUp,
  ArrowBigDown,
  History,
  CopyPlus,
  Flame,
} from '@tamagui/lucide-icons'
import { SimpleList, SimpleListItem } from '../SimpleListItem'

export interface ContainerFunctionsProps {
  orientation?: 'horizontal' | 'vertical'
  onAction?: (action: string, service?: string) => void
  service?: string
  asPopoverChild?: boolean
}

export const ComposeActions = ({
  orientation,
  onAction,
  service,
  asPopoverChild,
}: ContainerFunctionsProps) => {
  function handleAction(action: string) {
    if (onAction) {
      onAction(action, service)
    }
  }

  return (
    <SimpleList orientation={orientation} backgroundColor="$backgroundHover">
      <Popover.Close disabled={!asPopoverChild}>
        <SimpleListItem
          title="Up"
          icon={ArrowBigUp}
          hoverStyle={{ bg: '$backgroundStrong' }}
          cursor="pointer"
          onPress={() => handleAction('up')}
        />
      </Popover.Close>
      {!service && (
        <Popover.Close disabled={!asPopoverChild}>
          <SimpleListItem
            title="Down"
            icon={ArrowBigDown}
            hoverStyle={{ bg: '$backgroundStrong' }}
            cursor="pointer"
            onPress={() => handleAction('down')}
          />
        </Popover.Close>
      )}
      <Popover.Close disabled={!asPopoverChild}>
        <SimpleListItem
          title="Start"
          icon={Play}
          hoverStyle={{ bg: '$backgroundStrong' }}
          cursor="pointer"
          onPress={() => handleAction('start')}
        />
      </Popover.Close>
      <Popover.Close disabled={!asPopoverChild}>
        <SimpleListItem
          title="Stop"
          icon={StopCircle}
          hoverStyle={{ bg: '$backgroundStrong' }}
          cursor="pointer"
          onPress={() => handleAction('stop')}
        />
      </Popover.Close>
      <Popover.Close disabled={!asPopoverChild}>
        <SimpleListItem
          title="Restart"
          icon={ListRestart}
          hoverStyle={{ bg: '$backgroundStrong' }}
          cursor="pointer"
          onPress={() => handleAction('restart')}
        />
      </Popover.Close>
      <Popover.Close disabled={!asPopoverChild}>
        <SimpleListItem
          title="Pull"
          icon={History}
          hoverStyle={{ bg: '$backgroundStrong' }}
          cursor="pointer"
          onPress={() => handleAction('pull')}
        />
      </Popover.Close>
      {!service && (
        <Popover.Close disabled={!asPopoverChild}>
          <SimpleListItem
            title="Create"
            icon={CopyPlus}
            hoverStyle={{ bg: '$backgroundStrong' }}
            cursor="pointer"
            onPress={() => handleAction('create')}
          />
        </Popover.Close>
      )}

      <Popover.Close disabled={!asPopoverChild}>
        <SimpleListItem
          title="Kill"
          icon={Flame}
          hoverStyle={{ bg: '$backgroundStrong' }}
          cursor="pointer"
          onPress={() => handleAction('kill')}
        />
      </Popover.Close>
      <Popover.Close disabled={!asPopoverChild}>
        <SimpleListItem
          title="Remove"
          icon={Trash2}
          hoverStyle={{ bg: '$backgroundStrong' }}
          cursor="pointer"
          onPress={() => handleAction('remove')}
        />
      </Popover.Close>
    </SimpleList>
  )
}
