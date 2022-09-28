import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardRepaymentAlarm } from './Card/CardRepaymentAlarm';

export default {
  title: 'Basis/Card',
  component: CardRepaymentAlarm,
} as ComponentMeta<typeof CardRepaymentAlarm>;

const Template: ComponentStory<typeof CardRepaymentAlarm> = (args) => (
  <CardRepaymentAlarm {...args} />
);

export const RepaymentAlarmCard = Template.bind({});
RepaymentAlarmCard.args = {
  label01: 'YOU HAVE MISSED 3 REPAYMENTS.',
  label02:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus lacus habitant ullamcorper at. Ipsum ut tellus ut feugiat viverra.',
  onClick: () => {},
  viewport: 'desktop',
};
