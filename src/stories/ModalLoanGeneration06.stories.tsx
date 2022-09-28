import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalLoanGeneration06 } from './Modal/ModalLoanGeneration06';

// json data
import FinancingLimit from './assets/json/financing-limit.json';

export default {
  title: 'Basis/Modal',
  component: ModalLoanGeneration06,
} as ComponentMeta<typeof ModalLoanGeneration06>;

const Template: ComponentStory<typeof ModalLoanGeneration06> = (args) => (
  <ModalLoanGeneration06 {...args} />
);

export const LoanGeneration06Modal = Template.bind({});
LoanGeneration06Modal.args = {
  open: true,
  viewport: 'desktop',
};
