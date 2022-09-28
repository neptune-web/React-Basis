import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalLoanGeneration05 } from './Modal/ModalLoanGeneration05';

// json data
import FinancingLimit from './assets/json/financing-limit.json';

export default {
  title: 'Basis/Modal',
  component: ModalLoanGeneration05,
} as ComponentMeta<typeof ModalLoanGeneration05>;

const Template: ComponentStory<typeof ModalLoanGeneration05> = (args) => (
  <ModalLoanGeneration05 {...args} />
);

export const LoanGeneration05Modal = Template.bind({});
LoanGeneration05Modal.args = {
  open: true,
  onClick: () => {},
  viewport: 'desktop',
};
