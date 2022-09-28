import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputGreenLabelName } from './Input/InputGreenLabelName';

export default {
  title: 'Basis/Input',
  component: InputGreenLabelName,
} as ComponentMeta<typeof InputGreenLabelName>;

const Template: ComponentStory<typeof InputGreenLabelName> = (args) => (
  <InputGreenLabelName {...args} />
);

export const NameInputGreenLabel = Template.bind({});
NameInputGreenLabel.args = {
  label: 'Full Name',
  placeholder: 'Enter your full name',
  getName: (value: string) => {},
  name: 'user name',
};
