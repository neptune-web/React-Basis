import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputTextArea } from './Input/InputTextArea';

export default {
  title: 'Basis/Input',
  component: InputTextArea,
} as ComponentMeta<typeof InputTextArea>;

const Template: ComponentStory<typeof InputTextArea> = (args) => <InputTextArea {...args} />;

export const TextAreaInput = Template.bind({});
TextAreaInput.args = {
  placeholder: 'Type Here...',
  value: '',
  disabled: false,
  onChange: () => {},
};
