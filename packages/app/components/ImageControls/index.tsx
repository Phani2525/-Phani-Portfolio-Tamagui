import React from 'react'
import { XStack, Button } from 'ui'
import {
  Play,
  StopCircle,
  ListRestart,
  Ban,
  Trash2,
  HelpCircle,
  FileEdit,
  RefreshCw,
} from '@tamagui/lucide-icons'

interface ImageControlProps {
  width?: number | string
  onAction?: (action: string) => void
  running?: boolean
}

export const ImageControls = ({ onAction, running }: ImageControlProps) => {
  return (
    <XStack space="$5">
      <Button h="$2" icon={HelpCircle} onPress={() => onAction && onAction('help')}>
        HELP
      </Button>
      <Button h="$2" icon={FileEdit}>
        EDIT
      </Button>
      <Button h="$2" icon={RefreshCw}>
        REFRESH
      </Button>
      <Button
        h="$2"
        icon={Play}
        onPress={() => onAction && onAction('start')}
        disabled={running}
        bg={running ? '$orange8Light' : undefined}
      >
        START
      </Button>
      <Button
        h="$2"
        icon={StopCircle}
        onPress={() => onAction && onAction('stop')}
        bg={!running ? '$orange8Light' : undefined}
        disabled={!running}
      >
        STOP
      </Button>
      <Button
        h="$2"
        icon={ListRestart}
        onPress={() => onAction && onAction('restart')}
        disabled={!running}
        bg={!running ? '$orange8Light' : undefined}
      >
        RESTART
      </Button>
      <Button
        h="$2"
        icon={Ban}
        onPress={() => onAction && onAction('kill')}
        disabled={!running}
        bg={!running ? '$orange8Light' : undefined}
      >
        KILL
      </Button>
      <Button h="$2" icon={Trash2} onPress={() => onAction && onAction('remove')}>
        REMOVE
      </Button>
    </XStack>
  )
}
