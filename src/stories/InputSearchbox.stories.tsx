import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputSearchbox } from './Input/InputSearchbox';

export default {
  title: 'Basis/Input',
  component: InputSearchbox,
} as ComponentMeta<typeof InputSearchbox>;

const Template: ComponentStory<typeof InputSearchbox> = (args) => <InputSearchbox {...args} />;

export const SearchboxInput = Template.bind({});
SearchboxInput.args = {
  placeholder: 'Search',
  getValue: (value: string) => {},
  value: '',
};
