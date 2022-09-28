import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckboxOutline } from './Checkbox/CheckboxOutline';

export default {
  title: 'Basis/Checkbox',
  component: CheckboxOutline,
} as ComponentMeta<typeof CheckboxOutline>;

const Template: ComponentStory<typeof CheckboxOutline> = (args) => <CheckboxOutline {...args} />;

export const OutlineCheckbox = Template.bind({});
OutlineCheckbox.args = {
  label: 'I agree to terms & conditions',
};
