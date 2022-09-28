import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownMenuButton } from './Button/DropdownMenuButton';

import AvatarImage from './assets/images/avatar.png';

export default {
  title: 'Basis/Button',
  component: DropdownMenuButton,
} as ComponentMeta<typeof DropdownMenuButton>;

const Template: ComponentStory<typeof DropdownMenuButton> = (args) => (
  <DropdownMenuButton {...args} />
);

export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
  avatar: AvatarImage,
  name: 'Evan Yates',
  onClick: () => {},
  onMenuClick: () => {},
  open: true,
};
