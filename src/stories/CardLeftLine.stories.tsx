import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardLeftLine } from './Card/CardLeftLine';

export default {
  title: 'Basis/Card',
  component: CardLeftLine,
} as ComponentMeta<typeof CardLeftLine>;

const Template: ComponentStory<typeof CardLeftLine> = (args) => <CardLeftLine {...args} />;

export const LeftLineCard = Template.bind({});
LeftLineCard.args = {
  label: 'label',
  value: 'value',
};
