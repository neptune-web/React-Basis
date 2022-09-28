import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardNoInvitation } from './Card/CardNoInvitation';

export default {
  title: 'Basis/Card',
  component: CardNoInvitation,
} as ComponentMeta<typeof CardNoInvitation>;

const Template: ComponentStory<typeof CardNoInvitation> = (args) => <CardNoInvitation {...args} />;

export const NoInvitationCard = Template.bind({});
NoInvitationCard.args = {
  type: 'noInvitation',
  onClick: () => {},
};
