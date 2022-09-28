import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardAddress } from './Card/CardAddress';

export default {
  title: 'Basis/Card',
  component: CardAddress,
} as ComponentMeta<typeof CardAddress>;

const Template: ComponentStory<typeof CardAddress> = (args) => <CardAddress {...args} />;

export const AddressCard = Template.bind({});
AddressCard.args = {
  viewport: 'desktop',
  center: {
    lat: 41.8936,
    lng: -87.6722,
  },
};
