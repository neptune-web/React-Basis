import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select/Select';
import GenderList from './assets/json/gender.json';

export default {
  title: 'Basis/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const GenderSelect = Template.bind({});

GenderSelect.args = {
  list: GenderList,
  label: 'Gender*',
  select: { value: 'Male', label: 'Male' },
  placeholder: 'Select your gender',
  validate: { success: true },
  getSelect: () => {},
};
