import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownNavMenuButton } from './Button/DropdownNavMenuButton';

import IconHamburgerMenuBlack from './assets/icons/Icon_Hamburger_Menu_Black.svg';

export default {
  title: 'Basis/Button',
  component: DropdownNavMenuButton,
} as ComponentMeta<typeof DropdownNavMenuButton>;

const Template: ComponentStory<typeof DropdownNavMenuButton> = (args) => (
  <DropdownNavMenuButton {...args} />
);

export const DropdownNavMenu = Template.bind({});
DropdownNavMenu.args = {
  viewport: 'mobile',
  pathname: '/dashboard',
  gotoPath: () => {},
  disabled: false,
  icon: IconHamburgerMenuBlack,
  onClick: () => {},
  size: '',
  open: true,
};
