import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputAddress } from './Input/InputAddress';

export default {
  title: 'Basis/Input',
  component: InputAddress,
} as ComponentMeta<typeof InputAddress>;

const Template: ComponentStory<typeof InputAddress> = (args) => <InputAddress {...args} />;

export const AddressInput = Template.bind({});
AddressInput.args = {
  label: 'Address*',
  address: '',
  addressValidate: true,
  getAddress: (value: any) => {},
};
