import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonOutlineIconLabel } from './Button/ButtonOutlineIconLabel';

import IconAddGreen from './assets/icons/Icon_Add_Green.svg';
import IconAddWhite from './assets/icons/Icon_Add_White.svg';

export default {
  title: 'Basis/Button',
  component: ButtonOutlineIconLabel,
} as ComponentMeta<typeof ButtonOutlineIconLabel>;

const Template: ComponentStory<typeof ButtonOutlineIconLabel> = (args) => (
  <ButtonOutlineIconLabel {...args} />
);

export const OutlineIconLabelButton = Template.bind({});
OutlineIconLabelButton.args = {
  title: 'Add New',
  icon1: IconAddGreen,
  icon2: IconAddWhite,
  onClick: () => {},
};
