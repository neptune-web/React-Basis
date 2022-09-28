import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownInvitePatientsButton } from './Button/DropdownInvitePatientsButton';

import AvatarImage from './assets/images/avatar.png';

export default {
  title: 'Basis/Button',
  component: DropdownInvitePatientsButton,
} as ComponentMeta<typeof DropdownInvitePatientsButton>;

const Template: ComponentStory<typeof DropdownInvitePatientsButton> = (args) => (
  <DropdownInvitePatientsButton {...args} />
);

export const DropdownInvitePatients = Template.bind({});
DropdownInvitePatients.args = {
  title: 'Invite Patients',
  email: '',
  phone: '',
  emailValidate: {
    count: 0,
    success: true,
    type: '',
  },
  phoneValidate: {
    count: 0,
    success: true,
    type: '',
  },
  getEmail: (value: string) => {},
  getPhone: (value: string) => {},
  onClickViewPage: () => {},
  onClickInvitePatients: () => {},
  onClick: () => {},
  open: true,
};
