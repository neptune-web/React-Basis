import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoanStatus, LoanStatusLabel } from '../utils/commonEnums';
import { Chip } from './Chip';

export default {
  title: 'Basis/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const RepaidChip = Template.bind({});
RepaidChip.args = {
  status: LoanStatus.REPAID,
  label: LoanStatusLabel(LoanStatus.REPAID),
};
