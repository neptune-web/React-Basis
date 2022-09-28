import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonLinkTextUnderline } from './Button/ButtonLinkTextUnderline';

export default {
  title: 'Basis/Button',
  component: ButtonLinkTextUnderline,
} as ComponentMeta<typeof ButtonLinkTextUnderline>;

const Template: ComponentStory<typeof ButtonLinkTextUnderline> = (args) => (
  <ButtonLinkTextUnderline {...args} />
);

export const LinkTexUnderlinetButton = Template.bind({});
LinkTexUnderlinetButton.args = {
  label: 'Resend Code',
  onClick: () => {},
};
