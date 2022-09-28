import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccordionPersonalProfile } from './Accordion/AccordionPersonalProfile';

// json
import PersonalProfileList from './assets/json/personal-profile.json';

export default {
  title: 'Basis/Accordion',
  component: AccordionPersonalProfile,
} as ComponentMeta<typeof AccordionPersonalProfile>;

const Template: ComponentStory<typeof AccordionPersonalProfile> = (args) => (
  <AccordionPersonalProfile {...args} />
);

export const PersonalProfileAccordion = Template.bind({});

PersonalProfileAccordion.args = {
  data: PersonalProfileList[0],
};
