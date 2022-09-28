import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OutlineIconButton } from './Button/OutlineIconButton';

import IconBellBadge from './assets/icons/Icon_Bell_Badge.svg';

export default {
  title: 'Basis/Button',
  component: OutlineIconButton,
} as ComponentMeta<typeof OutlineIconButton>;

const Template: ComponentStory<typeof OutlineIconButton> = (args) => (
  <OutlineIconButton {...args} />
);

export const ButtonOutlineIcon = Template.bind({});
ButtonOutlineIcon.args = {
  icon: IconBellBadge,
};
