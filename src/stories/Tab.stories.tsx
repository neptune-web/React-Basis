import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from './Tab';

export default {
  title: 'Basis/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const SettingsTab = Template.bind({});
SettingsTab.args = {
  tabList: [
    { label: 'Update my information' },
    { label: 'Change Password' },
    { label: 'Policies' },
  ],
  activeTab: 0,
  selectTab: () => {},
};
