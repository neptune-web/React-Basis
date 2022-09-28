import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardPersonalInfo } from './Card/CardPersonalInfo';

export default {
  title: 'Basis/Card',
  component: CardPersonalInfo,
} as ComponentMeta<typeof CardPersonalInfo>;

const Template: ComponentStory<typeof CardPersonalInfo> = (args) => <CardPersonalInfo {...args} />;

export const PersonalInfoCard = Template.bind({});
PersonalInfoCard.args = {
  providerName: 'ABS Tooth Care of America',
  location: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
  phoneNumber: '(480) 555-0103',
  role: 'Account Manager',
  admin: 'Lorem Ipsum',
  description:
    'Please contact your account admin at superuser@email.com to make changes to organization’s profile information. If superuser, then display link to manage locations',
  color: '#000000',
  backgroundColor: '#FFFFFF',
};
