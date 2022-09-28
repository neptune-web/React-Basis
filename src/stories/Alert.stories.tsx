import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from './Alert';

export default {
  title: 'Basis/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertApp = Template.bind({});

AlertApp.args = {
  label: 'Email already exists. Please use other email address!',
  color: '#ffffff',
  backgroundColor: '#DB5C6C',
  delay: 5000,
};
