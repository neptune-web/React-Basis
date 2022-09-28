import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputEmail } from './Input/InputEmail';

export default {
  title: 'Basis/Input',
  component: InputEmail,
} as ComponentMeta<typeof InputEmail>;

const Template: ComponentStory<typeof InputEmail> = (args) => <InputEmail {...args} />;

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: 'Email address*',
  email: 'john@gmail.com',
  emailValidate: {
    success: true,
    type: '',
  },
  getEmail: () => {},
};
