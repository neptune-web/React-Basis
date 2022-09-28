import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputGreenLabelCardNumber } from './Input/InputGreenLabelCardNumber';

export default {
  title: 'Basis/Input',
  component: InputGreenLabelCardNumber,
} as ComponentMeta<typeof InputGreenLabelCardNumber>;

const Template: ComponentStory<typeof InputGreenLabelCardNumber> = (args) => (
  <InputGreenLabelCardNumber {...args} />
);

export const CardNumberInputGreenLabel = Template.bind({});
CardNumberInputGreenLabel.args = {
  label: 'Card Number',
  placeholder: 'Enter card number',
  getCardNumber: (value: string) => {},
  cardNumber: '1234567890123456099',
};
