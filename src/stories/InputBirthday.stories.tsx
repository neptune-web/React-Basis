import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputBirthday } from './Input/InputBirthday';

export default {
  title: 'Basis/Input',
  component: InputBirthday,
} as ComponentMeta<typeof InputBirthday>;

const Template: ComponentStory<typeof InputBirthday> = (args) => <InputBirthday {...args} />;

export const DateOfBirthInput = Template.bind({});
DateOfBirthInput.args = {
  label: 'Date of Birth',
  birthday: new Date(),
  birthdayValidate: true,
  selectBirthday: (date: Date) => {},
};
