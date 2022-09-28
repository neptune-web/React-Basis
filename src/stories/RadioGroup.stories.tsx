import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioGroup } from './Radio/RadioGroup';

// json
import RepaymentMethodList from './assets/json/repayment-method.json';

export default {
  title: 'Basis/Radio',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const RepaymentRadioGroup = Template.bind({});
RepaymentRadioGroup.args = {
  data: RepaymentMethodList,
  checkedId: 0,
  onChange: () => {},
};
