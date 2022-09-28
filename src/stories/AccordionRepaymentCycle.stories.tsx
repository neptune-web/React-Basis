import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccordionRepaymentCycle } from './Accordion/AccordionRepaymentCycle';

// json
import RepaymentCycleList from './assets/json/repayment-cycle.json';

export default {
  title: 'Basis/Accordion',
  component: AccordionRepaymentCycle,
} as ComponentMeta<typeof AccordionRepaymentCycle>;

const Template: ComponentStory<typeof AccordionRepaymentCycle> = (args) => (
  <AccordionRepaymentCycle {...args} />
);

export const RepaymentCycleAccordion = Template.bind({});

RepaymentCycleAccordion.args = {
  data: RepaymentCycleList,
};
