import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

// json data
import terms01Json from './assets/json/terms-01.json';

export default {
  title: 'Basis/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const EmptyModal = Template.bind({});
EmptyModal.args = {
  open: true,
  close: (bool: boolean) => {},
};
