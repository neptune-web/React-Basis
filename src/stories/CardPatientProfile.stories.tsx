import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardPatientProfile } from './Card/CardPatientProfile';

export default {
  title: 'Basis/Card',
  component: CardPatientProfile,
} as ComponentMeta<typeof CardPatientProfile>;

const Template: ComponentStory<typeof CardPatientProfile> = (args) => (
  <CardPatientProfile {...args} />
);

export const PatientProfileCard = Template.bind({});
PatientProfileCard.args = {
  name: 'John Wick',
  birthday: '05/10/91',
  address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
  phoneNumber: '(406) 555-2451',
  email: 'Johnwick@gmail.com',
  createdDate: '01/01/2021',
};
