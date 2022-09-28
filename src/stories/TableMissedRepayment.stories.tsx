import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableMissedRepayment } from './Table/TableMissedRepayment';

// json
import MissedRepaymentList from './assets/json/missed-repayment.json';

export default {
  title: 'Basis/Table',
  component: TableMissedRepayment,
} as ComponentMeta<typeof TableMissedRepayment>;

const Template: ComponentStory<typeof TableMissedRepayment> = (args) => (
  <TableMissedRepayment {...args} />
);

export const MissedRepaymentTable = Template.bind({});
MissedRepaymentTable.args = {
  data: MissedRepaymentList,
};
