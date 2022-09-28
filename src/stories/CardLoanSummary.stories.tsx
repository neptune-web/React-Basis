import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardLoanSummary } from './Card/CardLoanSummary';

export default {
  title: 'Basis/Card',
  component: CardLoanSummary,
} as ComponentMeta<typeof CardLoanSummary>;

const Template: ComponentStory<typeof CardLoanSummary> = (args) => <CardLoanSummary {...args} />;

export const LoanSummaryCard = Template.bind({});
LoanSummaryCard.args = {
  outstandingBalance: 900,
  repaymentsRemaining: 9,
  repaymentAmount: 100,
  nextRepaymentDate: '5 Mar, 2022',
};
