import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './Radio';

// json
import RepaymentMethodList from './assets/json/repayment-method.json';

export default {
  title: 'Basis/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const ElementRadio = Template.bind({});
ElementRadio.args = {
  data: RepaymentMethodList[0],
  checkedId: 1,
  onChange: () => {},
};
