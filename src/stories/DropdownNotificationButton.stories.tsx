import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownNotificationButton } from './Button/DropdownNotificationButton';

import IconBellBadge from './assets/icons/Icon_Bell_Badge.svg';
import NotificationList from './assets/json/notification.json';

export default {
  title: 'Basis/Button',
  component: DropdownNotificationButton,
} as ComponentMeta<typeof DropdownNotificationButton>;

const Template: ComponentStory<typeof DropdownNotificationButton> = (args) => (
  <DropdownNotificationButton {...args} />
);

export const dropdownNotification = Template.bind({});
dropdownNotification.args = {
  data: NotificationList,
  disabled: false,
  icon: IconBellBadge,
  onClick: () => {},
  size: '',
  open: false,
};
