import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalLoanGeneration04 } from './Modal/ModalLoanGeneration04';

// json data
import FinancingLimit from './assets/json/financing-limit.json';

export default {
  title: 'Basis/Modal',
  component: ModalLoanGeneration04,
} as ComponentMeta<typeof ModalLoanGeneration04>;

const Template: ComponentStory<typeof ModalLoanGeneration04> = (args) => (
  <ModalLoanGeneration04 {...args} />
);

export const LoanGeneration04Modal = Template.bind({});
LoanGeneration04Modal.args = {
  open: true,
  onClick: () => {},
  viewport: 'desktop',
};
