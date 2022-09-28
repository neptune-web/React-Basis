import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalLoanGeneration02 } from './Modal/ModalLoanGeneration02';

// json data
import FinancingLimit from './assets/json/financing-limit.json';

export default {
  title: 'Basis/Modal',
  component: ModalLoanGeneration02,
} as ComponentMeta<typeof ModalLoanGeneration02>;

const Template: ComponentStory<typeof ModalLoanGeneration02> = (args) => (
  <ModalLoanGeneration02 {...args} />
);

export const LoanGeneration02Modal = Template.bind({});
LoanGeneration02Modal.args = {
  open: true,
  onClick: () => {},
  title01: 'Check Your',
  title02: 'Financing Limit',
  description01:
    'We are glad that you have made this far, now let’s check your financing limit & get your loan approved within minutes',
  description02: 'Read Equifax T&C below and agree to proceed',
  content: FinancingLimit,
};
