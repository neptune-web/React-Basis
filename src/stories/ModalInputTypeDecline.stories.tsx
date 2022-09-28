import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalInputTypeDecline } from './Modal/ModalInputTypeDecline';

export default {
  title: 'Basis/Modal',
  component: ModalInputTypeDecline,
} as ComponentMeta<typeof ModalInputTypeDecline>;

const Template: ComponentStory<typeof ModalInputTypeDecline> = (args) => (
  <ModalInputTypeDecline {...args} />
);

export const DeclineModal = Template.bind({});
DeclineModal.args = {
  open: true,
  onOkClick: () => {},
  onCancelClick: () => {},
};
