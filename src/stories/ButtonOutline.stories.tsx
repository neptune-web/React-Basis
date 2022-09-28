import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OutlineButton } from './Button/OutlineButton';

export default {
  title: 'Basis/Button',
  component: OutlineButton,
} as ComponentMeta<typeof OutlineButton>;

const Template: ComponentStory<typeof OutlineButton> = (args) => <OutlineButton {...args} />;

export const ButtonOutline = Template.bind({});
ButtonOutline.args = {
  title: 'Pay',
};
