import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputName } from './Input/InputName';

export default {
  title: 'Basis/Input',
  component: InputName,
} as ComponentMeta<typeof InputName>;

const Template: ComponentStory<typeof InputName> = (args) => <InputName {...args} />;

export const NameInput = Template.bind({});
NameInput.args = {
  label: 'First Name',
  placeholder: 'Enter your first name',
  getName: (value: string) => {},
  name: 'first name',
  nameValidate: { success: true, type: '' },
};
