import React from 'react';

// third party components
import { ComponentStory, ComponentMeta } from '@storybook/react';

// custom components
import { Logo } from './Logo';

export default {
  title: 'Basis/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const DashboardLogo = Template.bind({});
DashboardLogo.args = {
  onClick: () => {
    console.log('Clicked Logo Image');
  },
};
