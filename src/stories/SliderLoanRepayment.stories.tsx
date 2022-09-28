import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SliderLoanRepayment } from './Slider/SliderLoanRepayment';

// json
import SliderLoanRepaymentList from './assets/json/slider-loan-repayment.json';

export default {
  title: 'Basis/Slider',
  component: SliderLoanRepayment,
} as ComponentMeta<typeof SliderLoanRepayment>;

const Template: ComponentStory<typeof SliderLoanRepayment> = (args) => (
  <SliderLoanRepayment {...args} />
);

export const LoanRepaymentSlider = Template.bind({});
LoanRepaymentSlider.args = {
  data: [],
};
