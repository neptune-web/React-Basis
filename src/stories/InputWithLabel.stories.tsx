import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputWithLabel } from './Input/InputWithLabel';

export default {
  title: 'Basis/Input',
  component: InputWithLabel,
} as ComponentMeta<typeof InputWithLabel>;

const Template: ComponentStory<typeof InputWithLabel> = (args) => <InputWithLabel {...args} />;

export const LabelWithInput = Template.bind({});
LabelWithInput.args = {
  label: 'Refund Amount',
  refundAmount: '$1000.00',
  refundAmountValidate: { success: true, type: '' },
  getRefundAmount: (value: string) => {},
};
