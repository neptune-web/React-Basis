import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputPostalCode } from './Input/InputPostalCode';

export default {
  title: 'Basis/Input',
  component: InputPostalCode,
} as ComponentMeta<typeof InputPostalCode>;

const Template: ComponentStory<typeof InputPostalCode> = (args) => <InputPostalCode {...args} />;

export const PostalCodeInput = Template.bind({});
PostalCodeInput.args = {
  label: 'Postal Code',
  postalCode: '12345',
  postalCodeValidate: { success: true, type: '' },
  getPostalCode: (value: string) => {},
};
