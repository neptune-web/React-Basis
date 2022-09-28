import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OutlineGreenCard } from './Card/OutlineGreenCard';

// json
import RepaymentTableList from './assets/json/repayment-table.json';

export default {
  title: 'Basis/Card',
  component: OutlineGreenCard,
} as ComponentMeta<typeof OutlineGreenCard>;

const Template: ComponentStory<typeof OutlineGreenCard> = (args) => <OutlineGreenCard {...args} />;

export const CardOutlineGreen = Template.bind({});
CardOutlineGreen.args = {
  title: 'Repayment Table',
  data: RepaymentTableList,
};
