import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardPayNow } from './Card/CardPayNow';

export default {
  title: 'Basis/Card',
  component: CardPayNow,
} as ComponentMeta<typeof CardPayNow>;

const Template: ComponentStory<typeof CardPayNow> = (args) => <CardPayNow {...args} />;

export const PayNowCard = Template.bind({});
PayNowCard.args = {
  data: {
    id: 0,
    loanID: 'BAS1001',
    outstandingBalance: 1000,
    repaymentAmount: 100,
    repaymentEndDate: '02 / 02 / 22',
  },
  checkedId: 0,
  onSelect: (item: any) => {},
};
