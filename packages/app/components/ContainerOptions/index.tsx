import React from 'react'
import { YStack, SimplePopover, Button, Circle, Popover, XStack } from 'ui'
import {
  ChevronDown,
  FileEdit,
  TimerReset,
  Play,
  StopCircle,
  ListRestart,
  Ban,
  Trash2,
} from '@tamagui/lucide-icons'
import { LinkStack } from '../LinkStack'

export interface ContainerOptionsProps {
  onPress?: (e) => void
  onAction?: (container_name: string, action: string) => void
  container_name: string
}

export const ContainerOptions: React.FC<ContainerOptionsProps> = ({
  onPress,
  container_name,
  onAction,
}: ContainerOptionsProps) => {
  function handleAction(e, action: string) {
    e.stopPropagation()
    onAction && onAction(container_name, action)
    onPress && onPress(e)
  }

  return (
    <SimplePopover
      trigger={
        <Circle size="$2" onPress={onPress}>
          <ChevronDown />
        </Circle>
      }
    >
      <YStack space w="$11" ai="center">
        <Popover.Close asChild>
          <LinkStack href="" notLink onPress={(e) => handleAction(e, 'edit')}>
            <XStack>
              <Button h="$2" w="$11" icon={FileEdit}>
                Edit
              </Button>
            </XStack>
          </LinkStack>
        </Popover.Close>
        <Popover.Close asChild>
          <LinkStack href="" notLink onPress={(e) => handleAction(e, 'update')}>
            <XStack>
              <Button h="$2" w="$11" icon={TimerReset}>
                Update
              </Button>
            </XStack>
          </LinkStack>
        </Popover.Close>
        <Popover.Close asChild>
          <LinkStack href="" notLink onPress={(e) => handleAction(e, 'start')}>
            <XStack>
              <Button h="$2" w="$11" icon={Play}>
                Start
              </Button>
            </XStack>
          </LinkStack>
        </Popover.Close>
        <Popover.Close asChild>
          <LinkStack href="" notLink onPress={(e) => handleAction(e, 'stop')}>
            <XStack>
              <Button h="$2" w="$11" icon={StopCircle}>
                Stop
              </Button>
            </XStack>
          </LinkStack>
        </Popover.Close>
        <Popover.Close asChild>
          <LinkStack href="" notLink onPress={(e) => handleAction(e, 'restart')}>
            <XStack>
              <Button h="$2" w="$11" icon={ListRestart}>
                Restart
              </Button>
            </XStack>
          </LinkStack>
        </Popover.Close>
        <Popover.Close asChild>
          <LinkStack href="" notLink onPress={(e) => handleAction(e, 'kill')}>
            <XStack>
              <Button h="$2" w="$11" icon={Ban}>
                kill
              </Button>
            </XStack>
          </LinkStack>
        </Popover.Close>
        <Popover.Close asChild>
          <LinkStack href="" notLink onPress={(e) => handleAction(e, 'remove')}>
            <XStack>
              <Button h="$2" w="$11" icon={Trash2}>
                Remove
              </Button>
            </XStack>
          </LinkStack>
        </Popover.Close>
      </YStack>
    </SimplePopover>
  )
}
