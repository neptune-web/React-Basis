import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardIssueRefundFail } from './Card/CardIssueRefundFail';

// json data
import FinancingLimit from './assets/json/financing-limit.json';

export default {
  title: 'Basis/Card',
  component: CardIssueRefundFail,
} as ComponentMeta<typeof CardIssueRefundFail>;

const Template: ComponentStory<typeof CardIssueRefundFail> = (args) => (
  <CardIssueRefundFail {...args} />
);

export const IssueRefundFailCard = Template.bind({});
IssueRefundFailCard.args = {
  refundAmount: 100,
  viewport: 'desktop',
  onClick: () => {},
};
