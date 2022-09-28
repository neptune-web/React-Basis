import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputPhoneInvitePatient } from './Input/InputPhoneInvitePatient';

export default {
  title: 'Basis/Input',
  component: InputPhoneInvitePatient,
} as ComponentMeta<typeof InputPhoneInvitePatient>;

const Template: ComponentStory<typeof InputPhoneInvitePatient> = (args) => (
  <InputPhoneInvitePatient {...args} />
);

export const PhoneInvitePatientInput = Template.bind({});
PhoneInvitePatientInput.args = {
  label: 'Phone Number',
  phone: '',
  phoneValidate: { success: true, type: '' },
  getPhone: (value: string) => {},
};
