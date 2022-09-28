import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonBack } from './Button/ButtonBack';

export default {
  title: 'Basis/Button',
  component: ButtonBack,
} as ComponentMeta<typeof ButtonBack>;

const Template: ComponentStory<typeof ButtonBack> = (args) => <ButtonBack {...args} />;

export const BackButton = Template.bind({});
BackButton.args = {};
