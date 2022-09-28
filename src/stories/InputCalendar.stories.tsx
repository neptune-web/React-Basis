import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputCalendar } from './Input/InputCalendar';

export default {
  title: 'Basis/Input',
  component: InputCalendar,
} as ComponentMeta<typeof InputCalendar>;

const Template: ComponentStory<typeof InputCalendar> = (args) => <InputCalendar {...args} />;

export const DateInput = Template.bind({});
DateInput.args = {
  date: new Date(),
  dateValidate: true,
  selectDate: (date: Date) => {},
};
