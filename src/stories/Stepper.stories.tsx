import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stepper } from './Stepper';

export default {
  title: 'Basis/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />;

export const Steppers = Template.bind({});
Steppers.args = { currentStep: 1, readState: false };
