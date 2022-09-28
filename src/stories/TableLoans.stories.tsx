import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableLoans } from './Table/TableLoans';

// json
import LoansList from './assets/json/loans.json';

export default {
  title: 'Basis/Table',
  component: TableLoans,
} as ComponentMeta<typeof TableLoans>;

const Template: ComponentStory<typeof TableLoans> = (args) => <TableLoans {...args} />;

export const LoansTable = Template.bind({});
LoansTable.args = {
  data: [],
  filter: 'all',
};
