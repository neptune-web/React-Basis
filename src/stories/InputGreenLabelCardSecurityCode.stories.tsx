import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputGreenLabelCardSecurityCode } from './Input/InputGreenLabelCardSecurityCode';

export default {
  title: 'Basis/Input',
  component: InputGreenLabelCardSecurityCode,
} as ComponentMeta<typeof InputGreenLabelCardSecurityCode>;

const Template: ComponentStory<typeof InputGreenLabelCardSecurityCode> = (args) => (
  <InputGreenLabelCardSecurityCode {...args} />
);

export const CardSecurityCodeInputGreenLabel = Template.bind({});
CardSecurityCodeInputGreenLabel.args = {
  label: 'Card Security Code',
  placeholder: 'Card Security Code',
  getCardSecurityCode: (value: string) => {},
  cardSecurityCode: '',
};
