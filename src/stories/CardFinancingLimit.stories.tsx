import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardFinancingLimit } from './Card/CardFinancingLimit';

export default {
  title: 'Basis/Card',
  component: CardFinancingLimit,
} as ComponentMeta<typeof CardFinancingLimit>;

const Template: ComponentStory<typeof CardFinancingLimit> = (args) => (
  <CardFinancingLimit {...args} />
);

export const FinancingLimitCard = Template.bind({});
FinancingLimitCard.args = {
  title: 'Step 1',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus scelerisque elementum donec at dignissim.',
  color: '#0ACE5F',
  backgroundColor: '#E1F8EC',
};
