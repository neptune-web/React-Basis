import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DarkGreenCard } from './Card/DarkGreenCard';

export default {
  title: 'Basis/Card',
  component: DarkGreenCard,
} as ComponentMeta<typeof DarkGreenCard>;

const Template: ComponentStory<typeof DarkGreenCard> = (args) => <DarkGreenCard {...args} />;

export const CardDarkGreen = Template.bind({});
CardDarkGreen.args = {
  label01: 'Total Repayment Amount',
  label02: '$1000.00',
};
