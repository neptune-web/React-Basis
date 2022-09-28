import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Status, StatusCheckbox } from './StatusCheckbox';

export default {
  title: 'Basis/StatusCheckbox',
  component: StatusCheckbox,
} as ComponentMeta<typeof StatusCheckbox>;

const Template: ComponentStory<typeof StatusCheckbox> = (args) => <StatusCheckbox {...args} />;

export const None = Template.bind({});
None.args = {
  status: Status.NONE,
  label: 'Uppercase character (ABCD)',
};

export const Checked = Template.bind({});
Checked.args = {
  status: Status.CHECKED,
  label: 'Lowercase character (abcd)',
};

export const Crossed = Template.bind({});
Crossed.args = {
  status: Status.CROSSED,
  label: 'Special character (!@#$)',
};
