import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StepLabel } from './StepLabel';

export default {
  title: 'Basis/StepLabel',
  component: StepLabel,
} as ComponentMeta<typeof StepLabel>;

const Template: ComponentStory<typeof StepLabel> = (args) => <StepLabel {...args} />;

export const EmailStep = Template.bind({});
EmailStep.args = {
  stepLabel: 'STEP 01/03',
  stepTitle: 'Email Address',
};

export const PersonalInfoStep = Template.bind({});
PersonalInfoStep.args = {
  stepLabel: 'STEP 02/03',
  stepTitle: 'Personal Info',
};

export const TermsAndConditionsStep = Template.bind({});
TermsAndConditionsStep.args = {
  stepLabel: 'STEP 03/03',
  stepTitle: 'Trems & Conditions',
};
