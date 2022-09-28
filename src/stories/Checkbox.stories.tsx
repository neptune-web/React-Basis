import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Basis/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const TermsAndConditions = Template.bind({});
TermsAndConditions.args = {
  label: 'I agree to terms & conditions',
};

export const RememberMe = Template.bind({});
RememberMe.args = {
  label: 'Remember me',
};
