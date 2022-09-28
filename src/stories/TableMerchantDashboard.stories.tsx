import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableMerchantDashboard } from './Table/TableMerchantDashboard';

// json
import LoansList from './assets/json/loans.json';

export default {
  title: 'Basis/Table',
  component: TableMerchantDashboard,
} as ComponentMeta<typeof TableMerchantDashboard>;

const Template: ComponentStory<typeof TableMerchantDashboard> = (args) => (
  <TableMerchantDashboard {...args} />
);

export const LoansTable = Template.bind({});
LoansTable.args = {
  // data: [{}],
  // filter: 'all',
};
