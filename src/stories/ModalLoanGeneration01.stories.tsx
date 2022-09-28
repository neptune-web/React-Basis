import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalLoanGeneration01 } from './Modal/ModalLoanGeneration01';

export default {
  title: 'Basis/Modal',
  component: ModalLoanGeneration01,
} as ComponentMeta<typeof ModalLoanGeneration01>;

const Template: ComponentStory<typeof ModalLoanGeneration01> = (args) => (
  <ModalLoanGeneration01 {...args} />
);

export const LoanGeneration01Modal = Template.bind({});
LoanGeneration01Modal.args = {
  open: true,
  onClick: () => {},
  title01: 'Check Your',
  title02: 'Financing Limit',
  description:
    'We are glad that you have made this far, now let’s check your financing limit & get your loan approved within minutes',
};
