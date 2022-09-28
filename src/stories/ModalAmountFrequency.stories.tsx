import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalAmountFrequency } from './Modal/ModalAmountFrequency';

// json data
import FinancingLimit from './assets/json/financing-limit.json';

export default {
  title: 'Basis/Modal',
  component: ModalAmountFrequency,
} as ComponentMeta<typeof ModalAmountFrequency>;

const Template: ComponentStory<typeof ModalAmountFrequency> = (args) => (
  <ModalAmountFrequency {...args} />
);

export const AmountFrequencyModal = Template.bind({});
AmountFrequencyModal.args = {
  open: true,
  onClick: () => {},
  viewport: 'desktop',
};
