import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardSelectPaymentMethod } from './Card/CardSelectPaymentMethod';

// json
import PaymentMethodList from './assets/json/payment-method-list.json';

export default {
  title: 'Basis/Card',
  component: CardSelectPaymentMethod,
} as ComponentMeta<typeof CardSelectPaymentMethod>;

const Template: ComponentStory<typeof CardSelectPaymentMethod> = (args) => (
  <CardSelectPaymentMethod {...args} />
);

export const SelectPaymentMethodCard = Template.bind({});
SelectPaymentMethodCard.args = {
  paymentMethodList: PaymentMethodList,
  selectedPaymentMethodID: 0,
  onChangePaymentMethod: (item: any) => {},
};
