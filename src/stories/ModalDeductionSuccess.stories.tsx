import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalDeductionSuccess } from './Modal/ModalDeductionSuccess';

export default {
  title: 'Basis/Modal',
  component: ModalDeductionSuccess,
} as ComponentMeta<typeof ModalDeductionSuccess>;

const Template: ComponentStory<typeof ModalDeductionSuccess> = (args) => (
  <ModalDeductionSuccess {...args} />
);

export const DeductionSuccessModal = Template.bind({});
DeductionSuccessModal.args = {
  open: true,
  close: (bool: boolean) => {},
  onClick: () => {},
  viewport: 'desktop',
};
