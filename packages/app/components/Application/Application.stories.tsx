import React from 'react';
import { Application } from '.';
import { XStack } from 'tamagui';

export default {
  title: 'Components/Application',
  component: Application,
};

export const main = (args) => {
  return (
    <XStack space="$5">
      <Application {...args[0]} />
      <Application {...args[1]} />
      <Application {...args[2]} />
      <Application {...args[3]} />
      <Application {...args[4]} />
      <Application {...args[5]} />
      <Application {...args[6]} />
      <Application {...args[7]} />
      <Application {...args[8]} />
    </XStack>
  );
};

main.args = [
  {
    logoUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    title: 'Google',
    link: 'https://www.google.com',
  },
  {
    logoUrl: 'https://syslint.com/wp-content/uploads/2019/03/GitLab-logo.png',
    title: 'Gitlab',
    link: 'https://www.gitlab.com',
  },
  {
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png',
    title: 'Golang',
    link: 'https://www.golang.org',
  },
  {
    logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png',
    title: 'Docker',
    link: 'https://www.docker.com',
  },
  {
    logoUrl: 'https://concisesoftware.com/wp-content/uploads/2020/01/Kubernetes-logo.png',
    title: 'Kubernetes',
    link: 'https://www.kubernetes.io',
  },
  {
    logoUrl: 'https://www.gimp.org/images/frontpage/wilber-big.png',
    title: 'Gimp',
    link: 'https://www.gimp.org',
  },
  {
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fedora_logo.svg/1200px-Fedora_logo.svg.png',
    title: 'Fedora',
    link: 'https://getfedora.org',
  },
  {
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
    title: 'Linux',
    link: 'https://www.linux.org',
  },
  {
    logoUrl: 'https://antmedia.io/wp-content/uploads/2018/07/windows_logo-1.png',
    title: 'Windows',
    link: 'https://www.microsoft.com',
  },
];
