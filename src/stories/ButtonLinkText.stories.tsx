import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonLinkText } from './Button/ButtonLinkText';

export default {
  title: 'Basis/Button',
  component: ButtonLinkText,
} as ComponentMeta<typeof ButtonLinkText>;

const Template: ComponentStory<typeof ButtonLinkText> = (args) => <ButtonLinkText {...args} />;

export const LinkTextButton = Template.bind({});
LinkTextButton.args = {
  label: 'Resend Code',
  onClick: () => {},
};
