import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Ranger } from './Ranger';

export default {
  title: 'Basis/Ranger',
  component: Ranger,
} as ComponentMeta<typeof Ranger>;

const Template: ComponentStory<typeof Ranger> = (args) => <Ranger {...args} />;

export const RepaymentRanger = Template.bind({});
RepaymentRanger.args = {
  minValue: 100,
  maxValue: 10000,
  currentValue: 5600,
  onChange: () => {},
};
