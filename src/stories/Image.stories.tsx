import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// lotties
import ResetPasswordLink from './assets/lotties/reset-password-link.json';
import SuccessfulIcon from './assets/lotties/successful-icon.json';
import VerifyEmailAddress from './assets/lotties/verify-email-address.json';
import VerifyMobileNumber from './assets/lotties/verify-mobile-number.json';

import { Image } from './Image';

export default {
  title: 'Basis/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const ResetPasswordLinkImage = Template.bind({});
ResetPasswordLinkImage.args = {
  src: ResetPasswordLink,
  width: 300, // 246
  height: 300, // 246
};

export const SuccessfulIconImage = Template.bind({});
SuccessfulIconImage.args = {
  src: SuccessfulIcon,
  width: 342, // 249
  height: 342, // 249
};

export const VerifyEmailAddressImage = Template.bind({});
VerifyEmailAddressImage.args = {
  src: VerifyEmailAddress,
  width: 426, // 272
  height: 364, // 208
};

export const VerifyMobileNumberImage = Template.bind({});
VerifyMobileNumberImage.args = {
  src: VerifyMobileNumber,
  width: 342, // 249
  height: 342, // 249
};
