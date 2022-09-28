import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputVerificationCode } from './Input/InputVerificationCode';

export default {
  title: 'Basis/Input',
  component: InputVerificationCode,
} as ComponentMeta<typeof InputVerificationCode>;

const Template: ComponentStory<typeof InputVerificationCode> = (args) => (
  <InputVerificationCode {...args} />
);

export const VerificationCodeInput = Template.bind({});
VerificationCodeInput.args = {
  label: 'Verification Code',
  code: '123456',
  codeValidate: {
    success: true,
    type: '',
  },
  getCode: () => {},
};
