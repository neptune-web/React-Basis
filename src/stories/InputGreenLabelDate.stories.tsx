import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputGreenLabelDate } from './Input/InputGreenLabelDate';

export default {
  title: 'Basis/Input',
  component: InputGreenLabelDate,
} as ComponentMeta<typeof InputGreenLabelDate>;

const Template: ComponentStory<typeof InputGreenLabelDate> = (args) => (
  <InputGreenLabelDate {...args} />
);

export const ExpirationDateInputGreenLabel = Template.bind({});
ExpirationDateInputGreenLabel.args = {
  label: 'Expiration Date',
  placeholder: 'Expiration Date',
  getDate: (value: string) => {},
  date: '10/22',
};
