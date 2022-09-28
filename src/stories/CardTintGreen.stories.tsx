import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TintGreenCard } from './Card/TintGreenCard';

export default {
  title: 'Basis/Card',
  component: TintGreenCard,
} as ComponentMeta<typeof TintGreenCard>;

const Template: ComponentStory<typeof TintGreenCard> = (args) => <TintGreenCard {...args} />;

export const CardTintGreen = Template.bind({});
CardTintGreen.args = {
  label01: 'Amount',
  label02: '$100.00',
  label03: 'Per Deduction',
};
