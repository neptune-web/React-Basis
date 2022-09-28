import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalFooter } from './Modal/ModalFooter';

// json data
import terms01Json from './assets/json/terms-01.json';

export default {
  title: 'Basis/Modal',
  component: ModalFooter,
} as ComponentMeta<typeof ModalFooter>;

const Template: ComponentStory<typeof ModalFooter> = (args) => <ModalFooter {...args} />;

export const FooterModal = Template.bind({});
FooterModal.args = {
  viewport: 'desktop',
  open: true,
  close: (bool: boolean) => {},
  title01: 'Terms &',
  title02: 'Conditions',
  description:
    'For the purpose of industry regulation, you are required to read & accept our Copyright Policy.',
  content: terms01Json,
};
