import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalDecline } from './Modal/ModalDecline';

export default {
  title: 'Basis/Modal',
  component: ModalDecline,
} as ComponentMeta<typeof ModalDecline>;

const Template: ComponentStory<typeof ModalDecline> = (args) => <ModalDecline {...args} />;

export const DeclineModal = Template.bind({});
DeclineModal.args = {
  open: true,
  onOkClick: () => {},
  onCancelClick: () => {},
};
