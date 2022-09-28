import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RepaymentDetailCard } from './Card/RepaymentDetailCard';

export default {
  title: 'Basis/Card',
  component: RepaymentDetailCard,
} as ComponentMeta<typeof RepaymentDetailCard>;

const Template: ComponentStory<typeof RepaymentDetailCard> = (args) => (
  <RepaymentDetailCard {...args} />
);

export const CardRepaymentDeail = Template.bind({});
CardRepaymentDeail.args = {
  frequency: 'Semi Monthly',
  method: 'Via Bank Account',
  date: '3 of each month',
  deduction: 10,
  account: 'Chase 1234',
  onClick: () => {},
};
