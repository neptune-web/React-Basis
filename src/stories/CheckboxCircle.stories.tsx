import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckboxCircle } from './Checkbox/CheckboxCircle';

export default {
  title: 'Basis/Checkbox',
  component: CheckboxCircle,
} as ComponentMeta<typeof CheckboxCircle>;

const Template: ComponentStory<typeof CheckboxCircle> = (args) => <CheckboxCircle {...args} />;

export const CircleCheckbox = Template.bind({});
CircleCheckbox.args = {
  label: 'I agree to terms & conditions',
};

// export const RememberMe = Template.bind({});
// RememberMe.args = {
//   label: 'Remember me',
// };
