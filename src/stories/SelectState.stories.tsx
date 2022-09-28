import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { State } from 'country-state-city';
import { SelectState } from './Select/SelectState';

export default {
  title: 'Basis/Select',
  component: SelectState,
} as ComponentMeta<typeof SelectState>;

const Template: ComponentStory<typeof SelectState> = (args) => <SelectState {...args} />;

export const StateSelect = Template.bind({});
StateSelect.args = {
  list: State.getStatesOfCountry('US'),
  label: 'State*',
  state: { value: '', label: '' },
  stateValidate: { success: true },
  getState: () => {},
};
