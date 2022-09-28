import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalChangeRepaymentDate } from './Modal/ModalChangeRepaymentDate';

export default {
  title: 'Basis/Modal',
  component: ModalChangeRepaymentDate,
} as ComponentMeta<typeof ModalChangeRepaymentDate>;

const Template: ComponentStory<typeof ModalChangeRepaymentDate> = (args) => (
  <ModalChangeRepaymentDate {...args} />
);

export const ChangeRepaymentDateModal = Template.bind({});
ChangeRepaymentDateModal.args = {
  open: true,
  close: (bool: boolean) => {},
  onClick: () => {},
};
