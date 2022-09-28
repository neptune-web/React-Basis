import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonDeclineLinkText } from './Button/ButtonDeclineLinkText';

export default {
  title: 'Basis/Button',
  component: ButtonDeclineLinkText,
} as ComponentMeta<typeof ButtonDeclineLinkText>;

const Template: ComponentStory<typeof ButtonDeclineLinkText> = (args) => (
  <ButtonDeclineLinkText {...args} />
);

export const LinkTextButton = Template.bind({});
LinkTextButton.args = {
  label: 'Resend Code',
  onClick: () => {},
};
