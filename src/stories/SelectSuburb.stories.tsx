import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { City } from 'country-state-city';
import { SelectSuburb } from './Select/SelectSuburb';

export default {
  title: 'Basis/Select',
  component: SelectSuburb,
} as ComponentMeta<typeof SelectSuburb>;

const Template: ComponentStory<typeof SelectSuburb> = (args) => <SelectSuburb {...args} />;

export const SuburbSelect = Template.bind({});
SuburbSelect.args = {
  list: City.getCitiesOfState('US', 'CA'),
  label: 'Suburb*',
  suburb: { value: '', label: '' },
  suburbValidate: { success: true },
  getSuburb: () => {},
};
