import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoanDetailCard } from './Card/LoanDetailCard';

export default {
  title: 'Basis/Card',
  component: LoanDetailCard,
} as ComponentMeta<typeof LoanDetailCard>;

const Template: ComponentStory<typeof LoanDetailCard> = (args) => <LoanDetailCard {...args} />;

export const CardLoanDeail = Template.bind({});
CardLoanDeail.args = {
  loanID: 'BAS1001',
  loanIssueDate: '3 Feb, 2022',
  loanedAmount: 1000,
  balance: 10000,
};
