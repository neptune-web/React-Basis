import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardValueDetail } from './Card/CardValueDetail';

export default {
  title: 'Basis/Card',
  component: CardValueDetail,
} as ComponentMeta<typeof CardValueDetail>;

const Template: ComponentStory<typeof CardValueDetail> = (args) => <CardValueDetail {...args} />;

export const CardProviderDetail = Template.bind({});
CardProviderDetail.args = {
  value: '$900',
  detail: 'Amount received from basis',
};
