import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableRepaymentLedger } from './Table/TableRepaymentLedger';

// json
import RepaymentLedgerList from './assets/json/repayment-ledger.json';

export default {
  title: 'Basis/Table',
  component: TableRepaymentLedger,
} as ComponentMeta<typeof TableRepaymentLedger>;

const Template: ComponentStory<typeof TableRepaymentLedger> = (args) => (
  <TableRepaymentLedger {...args} />
);

export const RepaymentLedgerTable = Template.bind({});
RepaymentLedgerTable.args = {
  data: RepaymentLedgerList,
  onClick: (path: string) => {},
  viewport: 'desktop',
};
