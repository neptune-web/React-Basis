import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardPatientNotification } from './Card/CardPatientNotification';

export default {
  title: 'Basis/Card',
  component: CardPatientNotification,
} as ComponentMeta<typeof CardPatientNotification>;

const Template: ComponentStory<typeof CardPatientNotification> = (args) => (
  <CardPatientNotification {...args} />
);

export const PatientNotificationCard = Template.bind({});
PatientNotificationCard.args = {
  title: 'Abby Tooth Care ',
  detail: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
  dateInfo: 'Today, 12:01',
};
