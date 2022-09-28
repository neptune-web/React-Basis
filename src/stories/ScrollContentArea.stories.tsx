import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ScrollContentArea } from './ScrollContentArea';

import terms01Json from './assets/json/terms-01.json';

export default {
  title: 'Basis/ScrollContentArea',
  component: ScrollContentArea,
} as ComponentMeta<typeof ScrollContentArea>;

const Template: ComponentStory<typeof ScrollContentArea> = (args) => (
  <ScrollContentArea {...args} />
);

export const ESignAgreement = Template.bind({});
ESignAgreement.args = {
  data: terms01Json,
};
