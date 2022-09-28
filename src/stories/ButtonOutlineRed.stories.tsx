import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OutlineRedButton } from './Button/OutlineRedButton';

export default {
  title: 'Basis/Button',
  component: OutlineRedButton,
} as ComponentMeta<typeof OutlineRedButton>;

const Template: ComponentStory<typeof OutlineRedButton> = (args) => <OutlineRedButton {...args} />;

export const ButtonOutlineRed = Template.bind({});
ButtonOutlineRed.args = {
  title: 'Pay',
};
