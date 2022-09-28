import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccordionBasisWork } from './Accordion/AccordionBasisWork';

// json
import BasisWorkList from './assets/json/basis-work.json';

export default {
  title: 'Basis/Accordion',
  component: AccordionBasisWork,
} as ComponentMeta<typeof AccordionBasisWork>;

const Template: ComponentStory<typeof AccordionBasisWork> = (args) => (
  <AccordionBasisWork {...args} />
);

export const BasisWorkAccordion = Template.bind({});

BasisWorkAccordion.args = {
  data: BasisWorkList,
};
