import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MerchantHeader } from './Header/MerchantHeader';

export default {
  title: 'Basis/Header',
  component: MerchantHeader,
} as ComponentMeta<typeof MerchantHeader>;

const Template: ComponentStory<typeof MerchantHeader> = (args) => <MerchantHeader {...args} />;

export const HeaderDashboard = Template.bind({});
HeaderDashboard.args = {
  viewport: 'mobile',
  pathname: '/merchant/dashboard',
  gotoPath: () => {},
};
