import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardInvitation } from './Card/CardInvitation';

export default {
  title: 'Basis/Card',
  component: CardInvitation,
} as ComponentMeta<typeof CardInvitation>;

const Template: ComponentStory<typeof CardInvitation> = (args) => <CardInvitation {...args} />;

export const InvitationCard = Template.bind({});
InvitationCard.args = {
  data: {
    id: 0,
    title: 'string',
    address: 'string',
    created: 'string',
    description: 'string',
    status: 2,
  },
  onOkClick: () => {},
  onCancelClick: () => {},
};
