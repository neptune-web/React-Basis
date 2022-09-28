import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalDisclaimer01 } from './Modal/ModalDisclaimer01';

export default {
  title: 'Basis/Modal',
  component: ModalDisclaimer01,
} as ComponentMeta<typeof ModalDisclaimer01>;

const Template: ComponentStory<typeof ModalDisclaimer01> = (args) => (
  <ModalDisclaimer01 {...args} />
);

export const Disclaimer01Modal = Template.bind({});
Disclaimer01Modal.args = {
  open: true,
  onOkClick: () => {},
  onCancelClick: () => {},
};
