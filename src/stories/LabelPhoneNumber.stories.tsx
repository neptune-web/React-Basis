import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LabelPhoneNumber } from './Label/LabelPhoneNumber';

export default {
  title: 'Basis/Label',
  component: LabelPhoneNumber,
} as ComponentMeta<typeof LabelPhoneNumber>;

const Template: ComponentStory<typeof LabelPhoneNumber> = (args) => <LabelPhoneNumber {...args} />;

export const PhoneNumberLabel = Template.bind({});
PhoneNumberLabel.args = {
  phoneNumber: '(406) 555-0120',
};
