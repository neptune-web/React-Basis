import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableRepaymentHistory } from './Table/TableRepaymentHistory';

// json
import RepaymentHistoryList from './assets/json/repayment-history.json';

export default {
  title: 'Basis/Table',
  component: TableRepaymentHistory,
} as ComponentMeta<typeof TableRepaymentHistory>;

const Template: ComponentStory<typeof TableRepaymentHistory> = (args) => (
  <TableRepaymentHistory {...args} />
);

export const RepaymentHistoryTable = Template.bind({});
RepaymentHistoryTable.args = {
  data: [],
};
