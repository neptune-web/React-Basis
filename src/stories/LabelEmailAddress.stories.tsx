import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LabelEmailAddress } from './Label/LabelEmailAddress';

export default {
  title: 'Basis/Label',
  component: LabelEmailAddress,
} as ComponentMeta<typeof LabelEmailAddress>;

const Template: ComponentStory<typeof LabelEmailAddress> = (args) => (
  <LabelEmailAddress {...args} />
);

export const EmailAddressLabel = Template.bind({});
EmailAddressLabel.args = {
  emailAddress: 'Johnwick@gmail.com',
};
