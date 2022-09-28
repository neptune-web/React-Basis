import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProviderDetailCard } from './Card/ProviderDetailCard';

export default {
  title: 'Basis/Card',
  component: ProviderDetailCard,
} as ComponentMeta<typeof ProviderDetailCard>;

const Template: ComponentStory<typeof ProviderDetailCard> = (args) => (
  <ProviderDetailCard {...args} />
);

export const CardProviderDetail = Template.bind({});
CardProviderDetail.args = {
  name: 'Abby Tooth Care ',
  address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
  contactInfo: { email: 'Abbytoothcare@gmail.com', phone: '123456789, 987654321' },
};
