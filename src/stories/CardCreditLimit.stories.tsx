import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardCreditLimit } from './Card/CardCreditLimit';

export default {
  title: 'Basis/Card',
  component: CardCreditLimit,
} as ComponentMeta<typeof CardCreditLimit>;

const Template: ComponentStory<typeof CardCreditLimit> = (args) => <CardCreditLimit {...args} />;

export const CreditLimitCard = Template.bind({});
CreditLimitCard.args = {
  onClick: () => {},
  viewport: 'desktop',
};
