import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputName } from './Input/InputName';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Basis/Input',
  component: InputName,
} as ComponentMeta<typeof InputName>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputName> = (args) => <InputName {...args} />;

export const NameInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NameInput.args = {
  label: 'First Name',
  placeholder: 'Enter your first name',
  getName: (value: string) => {},
  name: 'first name',
  nameValidate: { success: true, type: '' },
};
