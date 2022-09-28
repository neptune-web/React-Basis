import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input/Input';

export default {
  title: 'Basis/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const CommonInput = Template.bind({});
CommonInput.args = {
  placeholder: 'Placeholder',
  value: '',
  onChange: () => {},
};
