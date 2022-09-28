import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './Button/IconButton';

import IconBellBadge from './assets/icons/Icon_Bell_Badge.svg';

export default {
  title: 'Basis/Button',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  icon: IconBellBadge,
};
