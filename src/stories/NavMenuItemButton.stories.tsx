import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavMenuItemButton } from './Button/NavMenuItemButton';

import AvatarImage from './assets/images/avatar.png';

export default {
  title: 'Basis/Button',
  component: NavMenuItemButton,
} as ComponentMeta<typeof NavMenuItemButton>;

const Template: ComponentStory<typeof NavMenuItemButton> = (args) => (
  <NavMenuItemButton {...args} />
);

export const ActiveDashboardNavMenuItemButton = Template.bind({});
ActiveDashboardNavMenuItemButton.args = {
  icon: AvatarImage,
  title: 'Dashboard',
  onClick: () => {},
  active: false,
};
