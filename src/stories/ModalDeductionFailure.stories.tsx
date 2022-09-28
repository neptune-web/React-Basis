import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalDeductionFailure } from './Modal/ModalDeductionFailure';

export default {
  title: 'Basis/Modal',
  component: ModalDeductionFailure,
} as ComponentMeta<typeof ModalDeductionFailure>;

const Template: ComponentStory<typeof ModalDeductionFailure> = (args) => (
  <ModalDeductionFailure {...args} />
);

export const DeductionFailureModal = Template.bind({});
DeductionFailureModal.args = {
  open: true,
  close: (bool: boolean) => {},
  onClick: () => {},
  viewport: 'desktop',
};
