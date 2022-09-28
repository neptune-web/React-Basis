import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputEmailInvitePatient } from './Input/InputEmailInvitePatient';

export default {
  title: 'Basis/Input',
  component: InputEmailInvitePatient,
} as ComponentMeta<typeof InputEmailInvitePatient>;

const Template: ComponentStory<typeof InputEmailInvitePatient> = (args) => (
  <InputEmailInvitePatient {...args} />
);

export const EmailInvitePatientInput = Template.bind({});
EmailInvitePatientInput.args = {
  label: 'Email address*',
  email: 'john@gmail.com',
  emailValidate: {
    success: true,
    type: '',
  },
  getEmail: () => {},
};
