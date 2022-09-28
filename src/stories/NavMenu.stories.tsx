import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavMenu } from './NavMenu';

export default {
  title: 'Basis/NavMenu',
  component: NavMenu,
} as ComponentMeta<typeof NavMenu>;

const Template: ComponentStory<typeof NavMenu> = (args) => <NavMenu {...args} />;

export const ButtonDropdown = Template.bind({});
ButtonDropdown.args = {
  viewport: 'desktop',
  pathname: '/dashboard',
  gotoPath: (path: string) => {},
  onClick: () => {},
};
