import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Basis/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Register = Template.bind({});
Register.args = {
  title: 'Register Account',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  title: 'Login',
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled',
  disabled: true,
};

export const hasArrow = Template.bind({});
hasArrow.args = {
  title: 'Has Arrow',
  hasArrow: true,
};
