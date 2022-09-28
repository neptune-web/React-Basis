import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardPatientHistory } from './Card/CardPatientHistory';

export default {
  title: 'Basis/Card',
  component: CardPatientHistory,
} as ComponentMeta<typeof CardPatientHistory>;

const Template: ComponentStory<typeof CardPatientHistory> = (args) => (
  <CardPatientHistory {...args} />
);

export const PatientHistoryCard = Template.bind({});
PatientHistoryCard.args = {
  title: 'Rfund Settled',
  detail: 'Partial Refund of $800.00 completed successfully',
  dateInfo: 'Today, 12:01',
};
