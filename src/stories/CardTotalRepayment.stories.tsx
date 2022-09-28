import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardTotalRepayment } from './Card/CardTotalRepayment';

export default {
  title: 'Basis/Card',
  component: CardTotalRepayment,
} as ComponentMeta<typeof CardTotalRepayment>;

const Template: ComponentStory<typeof CardTotalRepayment> = (args) => (
  <CardTotalRepayment {...args} />
);

export const TotalRepaymentCard = Template.bind({});
TotalRepaymentCard.args = {
  loanRepaymentAmount: 100,
  selectedPaymentMethodID: 0,
};
