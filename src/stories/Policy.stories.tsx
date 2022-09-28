import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Policy } from './Policy';

export default {
  title: 'Basis/Policy',
  component: Policy,
} as ComponentMeta<typeof Policy>;

const Template: ComponentStory<typeof Policy> = (args) => <Policy {...args} />;

export const PolicyArea = Template.bind({});
PolicyArea.args = { viewport: 'desktop' };
