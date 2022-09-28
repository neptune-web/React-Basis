import React from 'react';

// third party components
import { ComponentStory, ComponentMeta } from '@storybook/react';

// custom components
import { JoinUsButton } from './Button/JoinUsButton';

// images and icons
import PatientContainedIcon from './assets/icons/Icon_JoinUs_Contained_Patient.svg';
import PatientOutlinedIcon from './assets/icons/Icon_JoinUs_Outlined_Patient.svg';
import MerchantContainedIcon from './assets/icons/Icon_JoinUs_Contained_Merchant.svg';
import MerchantOutlinedIcon from './assets/icons/Icon_JoinUs_Outlined_Merchant.svg';

export default {
  title: 'Basis/Button',
  component: JoinUsButton,
} as ComponentMeta<typeof JoinUsButton>;

const Template: ComponentStory<typeof JoinUsButton> = (args) => <JoinUsButton {...args} />;

export const Patient = Template.bind({});
Patient.args = {
  onClick: () => {
    console.log('Clicked Patient Button');
  },
  containedIcon: PatientContainedIcon,
  outlinedIcon: PatientOutlinedIcon,
  title: 'Patient',
  description: 'Personal account to manage all you activities.',
};

export const Merchant = Template.bind({});
Merchant.args = {
  onClick: () => {
    console.log('Clicked Merchant Button');
  },
  containedIcon: MerchantContainedIcon,
  outlinedIcon: MerchantOutlinedIcon,
  title: 'Merchant',
  description: 'Own or belong to a company, this is for you.',
};
