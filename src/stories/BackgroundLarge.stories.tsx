import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BackgroundLarge } from './BackgroundLarge';

export default {
  title: 'Basis/Background',
  component: BackgroundLarge,
} as ComponentMeta<typeof BackgroundLarge>;

const Template: ComponentStory<typeof BackgroundLarge> = (args) => <BackgroundLarge {...args} />;

export const LargeBackground = Template.bind({});

LargeBackground.args = {};
