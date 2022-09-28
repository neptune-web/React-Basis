import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputPassword } from './Input/InputPassword';

export default {
  title: 'Basis/Input',
  component: InputPassword,
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args) => <InputPassword {...args} />;

export const CreatePasswordInput = Template.bind({});
CreatePasswordInput.args = {
  label: 'Create password*',
  password: '',
  passwordValidate: { success: true, type: '' },
  getPassword: () => {},
};
