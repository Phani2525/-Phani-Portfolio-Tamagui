import { SideBar } from 'app/components/SideBar';
import { SideSheet } from 'app/components/SideSheet';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { XStack, YStack, useMedia, H3 } from 'ui';
import { LinkStack } from 'app/components/LinkStack';
import { useAssets } from 'ui';
import { SolitoImage } from 'solito/image';

export function Header() {
  const [firstFetch, setFirstFetch] = React.useState(true);
  const media = useMedia();
  const [Logo] = useAssets(require('app/assets/portfologo.png'));
  const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';

  useEffect(() => {
    setFirstFetch(false);
  }, []);

  if (isMobile || media.xs) {
    return (
      <SideSheet>
        <SideBar space ai="flex-start" width="$16" padding="$2" />
      </SideSheet>
    );
  }

  return (
    <XStack
      width="100%"
      jc="space-between"
      padding="$3"
      height={100}
      // backgroundColor="$blue2Dark"
      $theme-light={{ bg: '$purple5' }}
      elevation="$2"
    >
      {(media.gtSm || firstFetch) && (
        <YStack width="50%" $md={{ width: '30%' }}>
          <XStack ai="center">
            <LinkStack href="/">
              <SolitoImage src={Logo} alt="Logo" height={60} width={60} style={{ borderRadius: 9999 }} />
            </LinkStack>
            <H3 fontStyle="italic">K S R PHANI BHUSHAN</H3>
          </XStack>
        </YStack>
      )}
      <SideBar
        flexDirection="row"
        width="50%"
        jc="space-evenly"
        $md={{ width: '70%' }}
        $sm={{ width: '100%', jc: 'flex-start' }}
      />
    </XStack>
  );
}
