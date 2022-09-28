import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalDisclaimer02 } from './Modal/ModalDisclaimer02';

export default {
  title: 'Basis/Modal',
  component: ModalDisclaimer02,
} as ComponentMeta<typeof ModalDisclaimer02>;

const Template: ComponentStory<typeof ModalDisclaimer02> = (args) => (
  <ModalDisclaimer02 {...args} />
);

export const Disclaimer02Modal = Template.bind({});
Disclaimer02Modal.args = {
  open: true,
  onOkClick: () => {},
};
