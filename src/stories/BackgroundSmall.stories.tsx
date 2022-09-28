import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BackgroundSmall } from './BackgroundSmall';

export default {
  title: 'Basis/Background',
  component: BackgroundSmall,
} as ComponentMeta<typeof BackgroundSmall>;

const Template: ComponentStory<typeof BackgroundSmall> = (args) => <BackgroundSmall {...args} />;

export const SmallBackground = Template.bind({});
SmallBackground.args = { viewport: 'desktop' };
