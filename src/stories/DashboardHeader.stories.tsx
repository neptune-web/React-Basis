import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DashboardHeader } from './Header/DashboardHeader';

export default {
  title: 'Basis/Header',
  component: DashboardHeader,
} as ComponentMeta<typeof DashboardHeader>;

const Template: ComponentStory<typeof DashboardHeader> = (args) => <DashboardHeader {...args} />;

export const HeaderDashboard = Template.bind({});
HeaderDashboard.args = {
  viewport: 'mobile',
  pathname: '/dashboard',
  gotoPath: () => {},
};
