import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalLoanGeneration03 } from './Modal/ModalLoanGeneration03';

// json data
import FinancingLimit from './assets/json/financing-limit.json';

export default {
  title: 'Basis/Modal',
  component: ModalLoanGeneration03,
} as ComponentMeta<typeof ModalLoanGeneration03>;

const Template: ComponentStory<typeof ModalLoanGeneration03> = (args) => (
  <ModalLoanGeneration03 {...args} />
);

export const LoanGeneration03Modal = Template.bind({});
LoanGeneration03Modal.args = {
  open: true,
  onClickDecline: () => {},
  onClickError: () => {},
  onClickApprove: () => {},
};
