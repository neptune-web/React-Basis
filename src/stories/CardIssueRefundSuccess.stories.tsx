import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardIssueRefundSuccess } from './Card/CardIssueRefundSuccess';

// json data
import FinancingLimit from './assets/json/financing-limit.json';

export default {
  title: 'Basis/Card',
  component: CardIssueRefundSuccess,
} as ComponentMeta<typeof CardIssueRefundSuccess>;

const Template: ComponentStory<typeof CardIssueRefundSuccess> = (args) => (
  <CardIssueRefundSuccess {...args} />
);

export const IssueRefundSuccessCard = Template.bind({});
IssueRefundSuccessCard.args = {
  refundAmount: 100,
  viewport: 'desktop',
  onClick: () => {},
};
