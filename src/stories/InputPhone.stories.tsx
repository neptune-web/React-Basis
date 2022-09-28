import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputPhone } from './Input/InputPhone';

export default {
  title: 'Basis/Input',
  component: InputPhone,
} as ComponentMeta<typeof InputPhone>;

const Template: ComponentStory<typeof InputPhone> = (args) => <InputPhone {...args} />;

export const MobilePhoneInput = Template.bind({});
MobilePhoneInput.args = {
  label: 'Mobile Number*',
  phone: '',
  phoneValidate: { success: true, type: '' },
  getPhone: (value: string) => {},
};
