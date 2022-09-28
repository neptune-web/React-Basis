import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardBank } from './Card/CardBank';

export default {
  title: 'Basis/Card',
  component: CardBank,
} as ComponentMeta<typeof CardBank>;

const Template: ComponentStory<typeof CardBank> = (args) => <CardBank {...args} />;

export const BankCard = Template.bind({});
const data = {
  id: 1,
  cardName: 'BANK OF CHICAGO',
  cardNumber: '•••• •••• •••• 6562',
  userName: 'Victoria Malakova',
  type: 'Saving',
  checked: true,
  backgroundColor: '#F6B7CE',
};

BankCard.args = {
  data: data,
  onClick: (id: number) => {},
};
